//
import { USERS } from "../models/Users";
import { PA_POEPLE } from "../models/Pa_people";
import { HttpError } from "../helpers/handleError";
import { transport, configTransportVery } from "../email";
import { encrptPassword, compararPassword } from "../helpers/bcrypt";
import sequelize from "../config/database";
import JWT from "jsonwebtoken";
import "dotenv/config";
import { PA_CUSTOMES } from "../models/Pa_customes";

export const singUp = async (req, res, next) => {
  try {
    const {
      ID,
      TIP_DOCUMENT,
      FRISTNAME,
      MIDDLENAME,
      LASTNAME,
      AGE,
      EMAIL,
      PAS_USER,
      ROL,
      DAT_BIRTH,
      COD_COUNTRY,
      COD_STATE,
      COD_CITY,
      DES_ADDRESS,
      NUM_AREA,
      NUM_PHONE,
      USR_ADD,
    } = req.body;
    await sequelize
      .query(
        "CALL INS_USER(:ID,:TIP_DOCUMENT,:FRISTNAME,:MIDDLENAME,:LASTNAME,:AGE,:EMAIL,:PAS_USER,:ROL,:DAT_BIRTH,:COD_COUNTRY,:COD_STATE,:COD_CITY,:DES_ADDRESS,:NUM_AREA,:NUM_PHONE, :USR_ADD)",
        {
          replacements: {
            ID,
            TIP_DOCUMENT,
            FRISTNAME,
            MIDDLENAME,
            LASTNAME,
            AGE,
            EMAIL,
            PAS_USER: await encrptPassword(PAS_USER),
            ROL,
            DAT_BIRTH,
            COD_COUNTRY,
            COD_STATE,
            COD_CITY,
            DES_ADDRESS,
            NUM_AREA,
            NUM_PHONE,
            USR_ADD,
          },
        }
      )
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    const User = await USERS.findOne({ where: { EMAIL } });
    const token = await JWT.sign({ id: User.COD_USER }, process.env.JWTSECRET);
    USERS.update(
      { API_TOKEN: token },
      {
        where: {
          EMAIL,
        },
      }
    );
    await transport.sendMail(
      configTransportVery(
        FRISTNAME,
        LASTNAME,
        EMAIL.replace("@", "%40"),
        token,
        req.headers.host,
        User.COD_USER
      )
    );
    return res.status(201).json({
      token,
    });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const singIn = async (req, res, next) => {
  const { EMAIL, PAS_USER } = req.body;
  try {
    const UserFond = await USERS.findOne({
      where: {
        EMAIL,
      },
    });
    if (!UserFond)
      return res
        .status(203)
        .json({ token: null, message: "Pass o User invalidos" });

    if (!(await compararPassword(PAS_USER, UserFond.PAS_USER)))
      return res
        .status(203)
        .json({ token: null, message: "Pass o User invalidos" });
    if (!UserFond.IND_USR)
      return res.status(203).json({ token: null, message: "User no activo" });
    if (!UserFond.EMAIL_VERIFIED)
      return res
        .status(203)
        .json({ token: null, message: "Confirme su correo electrónico" });
    const PermissionUser = await sequelize.query(
      "CALL SHOW_PERMISOS_USER_ID(:COD_USER)",
      {
        replacements: {
          COD_USER: UserFond.COD_USER,
        },
      }
    );
   const CustomerUser = await PA_CUSTOMES.findOne({ where: { COD_USER: UserFond.COD_USER } });
    const PeopleFond = await PA_POEPLE.findOne({
      where: { COD_PEOPLE: UserFond.COD_PEOPLE },
    });
    const token = JWT.sign({ id: UserFond.COD_USER }, process.env.JWTSECRET);
    return res.status(200).json({
      ok: true,
      COD_USER: UserFond.COD_USER,
      IMG_FHOTO: UserFond.PROFILE_PHOTO_PATH,
      EMAIL: UserFond.EMAIL,
      NAME: PeopleFond.FRISTNAME,
      LASTNAME: PeopleFond.LASTNAME,
      token,
      PermissionUser,
      CustomerUser
    });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const RevalidarToken = async (req, res, next) => {
  try {
    if (!req.userId)
      return res.status(203).json({ ok: false, message: "Token no valido" });
    const User = await USERS.findByPk(req.userId);
    if (!User)
      return res.status(203).json({ ok: false, message: "Token no valido" });
    const PermissionUser = await sequelize.query(
      "CALL SHOW_PERMISOS_USER_ID(:COD_USER)",
      {
        replacements: {
          COD_USER: User.COD_USER,
        },
      }
    );
    const CustomerUser = await PA_CUSTOMES.findOne({ where: { COD_USER: User.COD_USER } });
    const PeopleFond = await PA_POEPLE.findOne({
      where: { COD_PEOPLE: User.COD_PEOPLE },
    });
    const token = JWT.sign({ id: User.COD_USER }, process.env.JWTSECRET);
    return res.status(200).json({
      ok: true,
      COD_USER: User.COD_USER,
      IMG_FHOTO: User.PROFILE_PHOTO_PATH,
      EMAIL: User.EMAIL,
      NAME: PeopleFond.FRISTNAME,
      LASTNAME: PeopleFond.LASTNAME,
      token,
      PermissionUser,
      CustomerUser
    });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

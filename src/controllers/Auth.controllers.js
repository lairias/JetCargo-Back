//
const  USERS  =require("../models/Users")
const  PA_POEPLE  =require("../models/Pa_people")
const  {HttpError}  =require("../helpers/handleError")
require('dotenv').config();
const { transport, configTransportVeryAdmin,configTransportVery } =require("../email")
const { encrptPassword, compararPassword } =require("../helpers/bcrypt")
const sequelize =require("../config/database")
const JWT = require("jsonwebtoken");
const  PA_CUSTOMES  =require("../models/Pa_customes")
const generator = require('generate-password');

exports.singUp = async (req, res, next) => {
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
    const numero = (NUM_PHONE.split(')')[1])
    const NUM_PHONE1 = numero.replace('-','')
    await sequelize.query(
        "CALL INS_USER(:ID,:TIP_DOCUMENT,:FRISTNAME,:MIDDLENAME,:LASTNAME,:AGE,:EMAIL,:PAS_USER,:ROL,:DAT_BIRTH,:COD_COUNTRY,:COD_STATE,:COD_CITY,:DES_ADDRESS,:NUM_AREA,:NUM_PHONE1, :USR_ADD)",
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
            NUM_PHONE1,
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
exports.singUpAdmin = async (req, res, next) => {
  try {
    const {
      ID,
      TIP_DOCUMENT,
      FRISTNAME,
      MIDDLENAME,
      LASTNAME,
      AGE,
      EMAIL,
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
    const PAS_USER = generator.generate({
      length: 10,
      numbers: true
    });
    await sequelize.query(
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
      configTransportVeryAdmin(
        FRISTNAME,
        LASTNAME,
        PAS_USER,
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
exports.singIn = async (req, res, next) => {
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
    const CustomerUser = await PA_CUSTOMES.findOne({
      where: { COD_USER: UserFond.COD_USER },
    });
    const PeopleFond = await PA_POEPLE.findOne({
      where: { COD_PEOPLE: UserFond.COD_PEOPLE },
    });
    const token = JWT.sign({ id: UserFond.COD_USER }, process.env.JWTSECRET);
    return res.status(200).json({
      ok: true,
      COD_USER: UserFond.COD_USER,
      IMG_FHOTO: UserFond.PROFILE_PHOTO_PATH,
      EMAIL: UserFond.EMAIL,
      IND_INS: UserFond.IND_INS,
      NAME: PeopleFond.FRISTNAME,
      LASTNAME: PeopleFond.LASTNAME,
      token,
      PermissionUser,
      CustomerUser,
    });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.RevalidarToken = async (req, res, next) => {
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
    const CustomerUser = await PA_CUSTOMES.findOne({
      where: { COD_USER: User.COD_USER },
    });
    const PeopleFond = await PA_POEPLE.findOne({
      where: { COD_PEOPLE: User.COD_PEOPLE },
    });
    const token = JWT.sign({ id: User.COD_USER }, process.env.JWTSECRET);
    return res.status(200).json({
      ok: true,
      COD_USER: User.COD_USER,
      IMG_FHOTO: User.PROFILE_PHOTO_PATH,
      EMAIL: User.EMAIL,
      IND_INS: User.IND_INS,
      NAME: PeopleFond.FRISTNAME,
      LASTNAME: PeopleFond.LASTNAME,
      token,
      PermissionUser,
      CustomerUser,
    });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


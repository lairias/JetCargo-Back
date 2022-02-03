import { Se_PASS_RESET } from "../models/security/SE_pass_reset";
import { USERS } from "../models/Users";
import { PA_POEPLE } from "../models/Pa_people";
import JWT from "jsonwebtoken";
import { encrptPassword } from "../helpers/bcrypt";
import { transport, configTransportResetPass } from "../email";
import "dotenv/config";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";
import {SE_SEGURIDAD} from "../models/security/Se_seguridad"

export const CreatePassReset = async (req, res, next) => {
  const { EMAIL } = req.body;
  try {
    const UserFond = await USERS.findOne({ where: { EMAIL } });
    if (!UserFond)return res.sendStatus(400)
    const timeToken = await SE_SEGURIDAD.findByPk(2);
    const UserReset = await Se_PASS_RESET.findOne({ where: { EMAIL } });
    const token = JWT.sign(
      { email: UserFond.EMAIL, id: UserFond.COD_USER },
      process.env.JWTSECRETPASSWORD,
      { expiresIn: parseInt(timeToken.DATO_SEGURIDAD) }
    );
    const time = timeToken.DATO_SEGURIDAD / 3600;
    if (UserReset) {
      const People = await PA_POEPLE.findByPk(UserFond.COD_PEOPLE);
      await transport.sendMail(
        configTransportResetPass(
          People.FRISTNAME,
          People.LASTNAME,
          UserFond.EMAIL.replace("@", "%40"),
          token,
          req.headers.host,
          UserFond.COD_USER,
          time
        )
      );
      await Se_PASS_RESET.update(
        { API_TOKEN: token },
        {
          where: {
            EMAIL,
          },
        }
      );
    } else {
      const People = await PA_POEPLE.findByPk(UserFond.COD_PEOPLE);
      await transport.sendMail(
        configTransportResetPass(
          People.FRISTNAME,
          People.LASTNAME,
          UserFond.EMAIL.replace("@", "%40"),
          token,
          req.headers.host,
          UserFond.COD_USER,
          time
        )
      );
      await Se_PASS_RESET.create({ EMAIL, API_TOKEN: token });
    }
    return res.sendStatus(200)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const ForgotPassword = async (req, res, next) => {
  const { TOKEN, COD_USER, CORREO } = req.params;
  const { PASS } = req.body;
  try {
    const UserReset = await Se_PASS_RESET.findOne({
      where: { API_TOKEN: TOKEN },
    });
    await USERS.update(
      { PAS_USER: encrptPassword(PASS) },
      {
        where: {
          COD_USER,
        },
      }
    );
    await Se_PASS_RESET.destroy({ where: { EMAIL: CORREO } });
    if (!UserReset) return res.status(404).json({ message: "Token no valido" });
    return res.sendStatus(200)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetPassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  try {
    const cities = await Se_PASS_RESET.findAll({
      WHERE: {
        EMAIL,
      },
    });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const UpdatePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  const { API_TOKEN } = req.body;
  try {
   await sequelize
     .query("CALL INS_PASS_RESET(:EMAIL,:API_TOKEN)", {
       replacements: {
         EMAIL,
         API_TOKEN,
       },
     }).catch((error) => {
       console.log(error);
       HttpError(res, error);
       throw res.sendStatus(500);
     });
    return res.sendStatus(200)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const DeletePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  try {
    await Se_PASS_RESET.destroy({
      where: { EMAIL },
    });
    return res.sendStatus(200)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

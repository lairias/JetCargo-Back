import { Se_PASS_RESET } from "../models/security/SE_pass_reset";
import { USERS } from "../models/Users";
import { PA_POEPLE } from "../models/Pa_people";

import JWT from "jsonwebtoken";
import { encrptPassword, compararPassword } from "../helpers/bcrypt";
import { transport, configTransportResetPass } from "../email";
import "dotenv/config";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";
export const CreatePassReset = async (req, res, next) => {
  const { EMAIL } = req.body;
  try {
    const UserFond = await USERS.findOne({ where: { EMAIL } });
    const UserReset = await Se_PASS_RESET.findOne({ where: { EMAIL } });
    if (!UserFond)
      return res
        .status(401)
        .json({ token: null, message: "User no encontrado" });
    const correo = UserFond.EMAIL;
    const token = JWT.sign(
      { email: UserFond.EMAIL, id: UserFond.COD_USER },
      process.env.JWTSECRETPASSWORD,
      { expiresIn: 86400 }
    );
    if (UserReset) {
      const People = await PA_POEPLE.findByPk(UserFond.COD_PEOPLE);
      await transport.sendMail(
        configTransportResetPass(
          People.FRISTNAME,
          People.LASTNAME,
          correo.replace("@", "%40"),
          token,
          req.headers.host,
          UserFond.COD_USER
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
          correo.replace("@", "%40"),
          token,
          req.headers.host,
          UserFond.COD_USER
        )
      );
      await Se_PASS_RESET.create({ EMAIL, API_TOKEN: token });
    }
    res.status(200).json({ token });
  } catch (error) {
HttpError(res, error);
    next();
  }
};

export const ForgotPassword = async (req, res, next) => {
  const { TOKEN, COD_USER, CORREO } = req.params;
  const {PASS} = req.body
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
    await Se_PASS_RESET.destroy({ where: {EMAIL:CORREO} });
    if (!UserReset) return res.status(404).json({ message: "Token no valido" });
    const cities = await Se_PASS_RESET.findAll();
    res.status(200).json(cities);
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
    res.status(200).json(cities);
  } catch (error) {
HttpError(res, error);
    next();
  }
};

export const UpdatePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  const { API_TOKEN } = req.body;
  try {
    const cities = await sequelize.query(
      "CALL INS_PASS_RESET(:EMAIL,:API_TOKEN)",
      {
        replacements: {
          EMAIL,
          API_TOKEN,
        },
      }
    );
    res.status(200).json(cities);
  } catch (error) {
HttpError(res, error);
    next();
  }
};

export const DeletePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  try {
    const cities = await Se_PASS_RESET.destroy({
      where: { EMAIL },
    });
    res.status(200).json(cities);
  } catch (error) {
HttpError(res, error);
    next();
  }
};

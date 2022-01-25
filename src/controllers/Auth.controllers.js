//
import { USERS } from "../models/Users";
import { PA_POEPLE } from "../models/Pa_people";
import { MODEL_HAS_ROLES } from "../models/relations/MODEL_has_typeUser";

import { HttpError } from "../helpers/handleError";

import { transport,configTransportVery } from "../email";
import {encrptPassword, compararPassword} from "../helpers/bcrypt";
import sequelize from "../config/database";
import JWT from "jsonwebtoken";
 import "dotenv/config";

export const singUp = async (req, res, next) =>
{ try {
      const {ID,TIP_DOCUMENT,FRISTNAME,MIDDLENAME,LASTNAME, AGE,TIP_PERSON,USR_ADD,EMAIL,PAS_USER,ROL} = req.body;
      await sequelize.query(
        "CALL INS_USER(:ID, :TIP_DOCUMENT,:FRISTNAME, :MIDDLENAME, :LASTNAME, :AGE, :TIP_PERSON, :USR_ADD, :EMAIL, :PAS_USER, :ROL)",
        {
          replacements: {
            ID,
            TIP_DOCUMENT,
            FRISTNAME,
            MIDDLENAME,
            LASTNAME,
            AGE,
            TIP_PERSON,
            USR_ADD,
            EMAIL,
            PAS_USER: await encrptPassword(PAS_USER),
            ROL,
          },
        }
      );
      const User = await USERS.findOne({where:{EMAIL}});
      const token = await JWT.sign(
        { id: User.COD_USER },
        process.env.JWTSECRET,
        {
          expiresIn: 86400,
        }
      );
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
      return res.sendStatus(201).json({
        token,
      });
    } catch (error) {
    HttpError(res,error);
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
        .sendStatus(401)
        .json({ token: null, message: "Pass o User invalidos" });
        if (!(await compararPassword(PAS_USER, UserFond.PAS_USER)))
        return res
        .sendStatus(401)
        .json({ token: null, message: "Pass o User invalidos" });
        if (!UserFond.IND_USR) return res
          .sendStatus(401)
          .json({ token: null, message: "User no activo" });
        if (!UserFond.EMAIL_VERIFIED)
          return res
            .sendStatus(401)
            .json({ token: null, message: "Confirme su correo electrónico" });
    const token = JWT.sign(
      {  id: UserFond.COD_USER },
      process.env.JWTSECRET,
      {
        expiresIn: 86400,
      }
    );
    return res.sendStatus(200).json({
      token,
    });
  } catch (error) {
    HttpError(res.error)
    next();
  }
};

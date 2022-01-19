import { USERS } from "../models/Users";
import { PA_POEPLE } from "../models/Pa_people";
import { transport,configTransportVery } from "../email";
import {encrptPassword, compararPassword} from "../helpers/bcrypt";
import sequelize from "../config/database";
import JWT from "jsonwebtoken";
import { MODEL_HAS_ROLES } from "../models/relations/MODEL_has_typeUser";
 import "dotenv/config";
export const singUp = async (req, res, next) =>
  // 200 ok
  // 201 Created
  // 202 Accepted
  // 400 bad resquefa
  // 401 no autenticado
  // 404 no fund
  // 500 internal server error
  {
    try {
      const {
        ID,
        TIP_DOCUMENT,
        FRISTNAME,
        MIDDLENAME,
        LASTNAME,
        AGE,
        TIP_PERSON,
        USR_ADD,
        EMAIL,
        PAS_USER,
        ROL,
      } = req.body;
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
      res.status(201).json({
        token,
      });
    } catch (error) {
      console.log(error);
      res
        .status(501)
        .json({ message: "Error al momento de procesar la peticion " });
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
        .status(401)
        .json({ token: null, message: "Pass o User invalidos" });
    if (!(await compararPassword(PAS_USER, UserFond.PAS_USER)))
      return res
        .status(401)
        .json({ token: null, message: "Pass o User invalidos" });
    const token = JWT.sign(
      {  id: UserFond.COD_USER },
      process.env.JWTSECRET,
      {
        expiresIn: 86400,
      }
    );
    res.status(200).json({
      token,
    });
  } catch (error) {
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    console.log(error);
    next();
  }
};

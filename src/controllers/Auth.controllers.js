import { USERS } from "../models/Users";
import { PA_POEPLE } from "../models/Pa_people";
import middleware from "../middleware";
import config from "../config";
import sequelize from "../config/database";
import JWT from "jsonwebtoken";
import { MODEL_HAS_ROLES } from "../models/relations/MODEL_has_typeUser";
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

    const User = await sequelize.query(
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
          PAS_USER: await middleware.encrptPassword(PAS_USER),
          ROL,
        },
      }
    );
    console.log(User)
      const token = await JWT.sign({ id: EMAIL }, config.JwrSecret, {
        expiresIn: 86400,
      });
      USERS.update(
        { API_TOKEN: token },
        {
          where: {
            EMAIL,
          },
        }
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
    if (!(await middleware.compararPassword(PAS_USER, UserFond.PAS_USER)))
      return res
        .status(401)
        .json({ token: null, message: "Pass o User invalidos" });
    const token = JWT.sign({ id: UserFond.COD_USER }, config.JwrSecret, {
      expiresIn: 86400,
    });
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

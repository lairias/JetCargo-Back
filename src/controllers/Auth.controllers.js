import { USERS } from "../models/Users";
import middleware from "../middleware";
import config from "../config";
import JWT from "jsonwebtoken";
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
      const { EMAIL, PAS_USER } = req.body;

      const User = await USERS.create({
        EMAIL,
        PAS_USER: await middleware.encrptPassword(PAS_USER),
        USR_ADD: "admin",
      });
      const token = await JWT.sign({ id: User.COD_USER }, config.JwrSecret, {
        expiresIn: 86400,
      });

      USERS.update(
        { API_TOKEN: token },
        {
          where: {
            COD_USER: User.COD_USER,
          },
        }
      );

      res.status(201).json({
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

export const singIn = async (req, res, next) => {
  const { EMAIL, PAS_USER } = req.body;
  console.log(req.headers["x-access-token"]);
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

import sequelize from "../config/database";
import {SE_PERMISOS} from "../models/security/SE_permisos";
import { Op } from "sequelize";
import { HttpError } from "../helpers/handleError";

export const VeryEmail = async (req, res, next) => {
  const { EMAIL, TOKEN, COD_USER } = req.params;
  try {
    const User = await USERS.findOne({ where: { EMAIL } });
    if (!User)
      return res.status(404).json({ message: "Usuario no encontrado" });
    await USERS.update(
      { API_TOKEN: null, IND_USR: 1, EMAIL_VERIFIED: 1 },
      {
        where: {
          API_TOKEN: TOKEN,
          [Op.and]: [{ EMAIL }, { COD_USER }],
        },
      }
    );
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const GetPermissionUser = async (req, res, next) => {
  try {
    const PermissionUser = await SE_PERMISOS.findAll();
    if (!PermissionUser)
      return res
        .status(203)
        .json({ message: "Erro de procesp", ok:false });
    return res.status(200).json({PermissionUser, ok:true});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

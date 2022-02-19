import sequelize from "../config/database";
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
    return res.sendStatus(200)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const GetPermissionUser = async (req, res, next) => {
  const { COD_USER } = req.params;
  try {
    const PermissionUser = await sequelize.query("CALL SHOW_PERMISOS_USER_ID(:COD_USER)",{
        replacements: {
            COD_USER
        }
    } );
    if (!PermissionUser) return res.status(203).json({ message: "Correo electrónico no encontrado", found: null });
    return res.status(200).json(PermissionUser)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { HttpError } from "../helpers/handleError";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../models/relations/typeusers_has_permisos";
import sequelize from "../config/database";
import {
  RolesForeachPermiso,
  RolesForeachAllPermiso,
} from "./helpers/Roles.Helpers";

export const GetRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  try {
    const role = await PA_TypeUsers.findByPk(COD_TYPEUSERS);
    const permisos = await sequelize.query(`CALL SHOW_PERMISOS_TYPEUSER(${COD_TYPEUSERS}) `);
    res.status(200).json({ok:true,role,permisos});
  } catch (error) {
    console.log(error);
  }
};

export const GetRoles = async (req, res, next) => {
  try {
    const role = await sequelize.query("CALL COUNT_TYPE_USERS_ALL_PERMISOS()");
    if(!role) return res.status(203).json({ok:false, message: "No hay roles"});
    res.status(200).json({ok:true, role});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const UpdateRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  const { NOM_TYPE, DES_TYPE, USR_UPD, PERMISSION, TODO } = req.body;
  try {
    await PA_TypeUsers.update(
      { NOM_TYPE, DES_TYPE, USR_UPD },
      { where: { COD_TYPEUSERS } }
    );

    await MODEL_TYPEUSER_HAS_PERMISOS.destroy({ where: { COD_TYPEUSERS } });
    if (TODO) {
      RolesForeachAllPermiso(COD_TYPEUSERS);
      return res.sendStatus(200);
    } else {
      RolesForeachPermiso(PERMISSION, COD_TYPEUSERS);
      return res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};

export const DeleteRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  try {
    await PA_TypeUsers.destroy({
      where: { COD_TYPEUSERS },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const CreateRole = async (req, res, next) => {
  const { NOM_TYPE, DES_TYPE, USR_ADD, PERMISSION, TODO } = req.body;
  try {
    const role = await PA_TypeUsers.create({ NOM_TYPE, DES_TYPE, USR_ADD });
    if (TODO) {
      RolesForeachAllPermiso(role.COD_TYPEUSERS);
      return res.sendStatus(200);
    } else {
      RolesForeachPermiso(PERMISSION, role.COD_TYPEUSERS);
      return res.sendStatus(200);
    }
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

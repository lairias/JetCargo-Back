import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { HttpError } from "../helpers/handleError";
import sequelize from "../config/database/index";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../models/relations/typeusers_has_permisos";
import { SE_PERMISOS } from "../models/security/SE_permisos";

export const GetRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  try {
    const role = await PA_TypeUsers.findByPk(COD_TYPEUSERS);
    return res.status(200).json(role);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetRoles = async (req, res, next) => {
  try {
    const role = await PA_TypeUsers.findAll();
    return res.status(200).json(role);
  } catch (error) {
    HttpError(res, error);
    next();
  }};


export const UpdateRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  const { NOM_TYPE, DES_TYPE, USR_UPD, PERMISSION, TODO } = req.body;
  try {
     await PA_TypeUsers.update(
      { NOM_TYPE, DES_TYPE, USR_UPD },
      { where: { COD_TYPEUSERS } }
    );
    await MODEL_TYPEUSER_HAS_PERMISOS.destroy({ where: { COD_TYPEUSERS } });
    if(TODO) {
const allPermisos = await SE_PERMISOS.findAll()
allPermisos.forEach(async (element) => {
   await MODEL_TYPEUSER_HAS_PERMISOS.create({
     COD_PERMISO: element.COD_PERMISO,
     COD_TYPEUSERS: COD_TYPEUSERS,
   });
   next()
  });
   res.status(200);
    } 
    PERMISSION.forEach(async (element) => {
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISO: element,
        COD_TYPEUSERS: COD_TYPEUSERS,
      });
      next()
    });     res.status(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};



export const DeleteRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  try {
    const roles = await PA_TypeUsers.destroy({
      where: { COD_TYPEUSERS },
    });
    return res.status(200).json(roles);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const CreateRole = async (req, res, next) => {
  const { NOM_TYPE, DES_TYPE, USR_ADD, PERMISSION } = req.body;
  try {
    const role = await PA_TypeUsers.create({ NOM_TYPE, DES_TYPE, USR_ADD });
    PERMISSION.forEach((element) => {
      MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISO: element,
        COD_TYPEUSERS: role.COD_TYPEUSERS,
      });
    });
    return res.status(200).json(role);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

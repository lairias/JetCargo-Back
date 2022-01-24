import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { HttpError } from "../helpers/handleError";
import sequelize from "../config/database/index";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../models/relations/typeusers_has_permisos";

export const GetRole = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetRoles = async (req, res, next) => {
  try {
    const role = await PA_TypeUsers.findAll();
    res.status(200).json(role);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const UpdateRole = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const DeleteRole = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CreateRole = async (req, res, next) => {
  const { NOM_TYPE, DES_TYPE, USR_ADD, PERMISSION } = req.body;
  try {
    const role = await PA_TypeUsers.create({ NOM_TYPE, DES_TYPE, USR_ADD });
    PERMISSION.forEach(  (element) => {
          MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: element,
           COD_TYPEUSERS: role.COD_TYPEUSERS,
         })
    });
    return res.status(200).json(role)
  } catch (error) {
   
    next();
  }
};

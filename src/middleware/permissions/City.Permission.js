import sequelize from "../../config/database";
import {HttpError} from "../../helpers/handleError"

export const CityView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",{replacements: {COD_USER: req.userId,NAM_PERMISO: "city.view",}});
    if (!JSON.stringify(permiso[0])) return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error)
    next();
  }
};
export const CityCreate = async (req, res, next) => {
  try {const permiso = await sequelize.query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",{replacements: {COD_USER: req.userId,NAM_PERMISO: "city.crear",}});
 if (!JSON.stringify(permiso[0])) return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error)
    next();
  }
};
export const CityUpdate = async (req, res, next) => {
  try {const permiso = await sequelize.query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",{replacements: {COD_USER: req.userId,NAM_PERMISO: "city.update",}});
   if (!JSON.stringify(permiso[0])) return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error)
    next();
  }
};
export const CityDelete = async (req, res, next) => {
  try {const permiso = await sequelize.query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",{replacements: {COD_USER: req.userId,NAM_PERMISO: "city.delete",}});
   if (!JSON.stringify(permiso[0])) return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error)
    next();
  }
};

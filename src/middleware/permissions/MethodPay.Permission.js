import sequelize from "../../config/database";
import { HttpError } from "../../helpers/handleError";

export const MethoPayView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "methopay.view" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.sendStatus(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const MethoPayCreate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "methopay.crear" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.sendStatus(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const MethoPayUpdate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "methopay.update" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.sendStatus(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const MethoPayDelete = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "methopay.delete" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.sendStatus(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

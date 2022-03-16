import sequelize from "../../config/database";
import { HttpError } from "../../helpers/handleError";

export const TrackingView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "tracking.view",
        },
      }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const TrackingCreate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "tracking.crear",
        },
      }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const TrackingUpdate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "tracking.update",
        },
      }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const TrackingDelete = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "tracking.delete",
        },
      }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const TrackingNotOrden = async (req, res, next) => {
  try {
    const count = await sequelize.query(
      "CALL COUNT_TRACKING_NOT_ORDEN()",
          );
    const tracking = await sequelize.query(
      "CALL SHOW_TRACKING_NOT_ORDEN()",
          );
    if (!JSON.stringify(tracking[0])) return res.status(203).json({ ok:false, tracking:false, count:0 });
    return res.status(203).json({ ok:true, tracking , count });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

const sequelize =require( "../../config/database")
const { HttpError } =require( "../../helpers/handleError")

 const TrackingView = async (req, res, next) => {
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

 const TrackingCreate = async (req, res, next) => {
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
 const TrackingUpdate = async (req, res, next) => {
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
 const TrackingDelete = async (req, res, next) => {
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

module.exports =
{
  TrackingView,
  TrackingCreate,
  TrackingUpdate,
  TrackingDelete,
};
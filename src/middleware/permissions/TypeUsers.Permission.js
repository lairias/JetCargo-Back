const sequelize =require( "../../config/database")
const { HttpError } =require( "../../helpers/handleError")

 const TypeUserView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "typeuser.view",
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

 const TypeUserCreate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "typeuser.crear",
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
 const TypeUserUpdate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "typeuser.update",
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
 const TypeUserDelete = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      {
        replacements: {
          COD_USER: req.userId,
          NAM_PERMISO: "typeuser.delete",
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

module.exports = {
  TypeUserView,
  TypeUserCreate,
  TypeUserUpdate,
  TypeUserDelete,
};

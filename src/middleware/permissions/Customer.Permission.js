const sequelize =require( "../../config/database")
const { HttpError } =require( "../../helpers/handleError")

 exports.CustomerView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "customes.view" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CustomerCreate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "customes.crear" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CustomerUpdate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "customes.update" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CustomerDelete = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "customes.delete" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


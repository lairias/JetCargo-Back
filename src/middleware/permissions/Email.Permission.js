const sequelize =require( "../../config/database")
const { HttpError } =require( "../../helpers/handleError")

 const EmailView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "email.view" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const EmailCreate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "email.crear" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const EmailUpdate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "email.update" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const EmailDelete = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "email.delete" } }
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
  EmailView,
  EmailCreate,
  EmailUpdate,
  EmailDelete
};

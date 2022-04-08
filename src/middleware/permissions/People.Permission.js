const sequelize =require( "../../config/database")
const { HttpError } =require( "../../helpers/handleError")

 const PeopleView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "people.view" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 const PeopleCreate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "people.crear" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const PeopleUpdate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "people.update" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const PeopleDelete = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "people.delete" } }
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
  PeopleView,
  PeopleCreate,
  PeopleUpdate,
  PeopleDelete
};
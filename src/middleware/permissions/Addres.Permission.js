const sequelize =require( "../../config/database")
const { HttpError } =require( "../../helpers/handleError")
 const AddresView = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "addres.view" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const AddresCreate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "addres.crear" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const AddresUpdate = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "addres.update" } }
    );
    if (!JSON.stringify(permiso[0]))
      return res.status(403).json({ message: "Acceso no Autorizado" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 const AddresDelete = async (req, res, next) => {
  try {
    const permiso = await sequelize.query(
      "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
      { replacements: { COD_USER: req.userId, NAM_PERMISO: "addres.delete" } }
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
  AddresView,
  AddresCreate,
  AddresUpdate,
  AddresDelete
};
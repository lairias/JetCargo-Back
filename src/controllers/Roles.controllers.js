const  PA_TypeUsers  = require( "../models/Pa_typeUsers")
const  {HttpError}  = require( "../helpers/handleError")
const  MODEL_TYPEUSER_HAS_PERMISOS  = require( "../models/relations/typeusers_has_permisos")
const sequelize = require( "../config/database")
const {
  RolesForeachPermiso,
  RolesForeachAllPermiso,
} = require( "./helpers/Roles.Helpers")

 exports.GetRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  try {
    const role = await PA_TypeUsers.findByPk(COD_TYPEUSERS);
    const permisos = await sequelize.query(
      `CALL SHOW_PERMISOS_TYPEUSER(${COD_TYPEUSERS}) `
    );
    res.status(200).json({ ok: true, role, permisos });
  } catch (error) {
    console.log(error);
  }
};
 exports.GetRoleDisting = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  try {
    const role = await PA_TypeUsers.findByPk(COD_TYPEUSERS);
    const permisosDis = await sequelize.query(
      `CALL SHOW_PERMISOS_TYPEUSER_DISTIN(${COD_TYPEUSERS}) `
    );
    res.status(200).json({ ok: true, role, permisosDis });
  } catch (error) {
    console.log(error);
  }
};

 exports.GetRoles = async (req, res, next) => {
  try {
    const role = await sequelize.query("CALL COUNT_TYPE_USERS_ALL_PERMISOS()");
    if (!role)
      return res.status(203).json({ ok: false, message: "No hay roles" });
    res.status(200).json({ ok: true, role });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.UpdateRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  const { NOM_TYPE, DES_TYPE, PERMISSION, TODO } = req.body;
  try {
    await PA_TypeUsers.update(
      { NOM_TYPE, DES_TYPE },
      { where: { COD_TYPEUSERS } }
    );

    await MODEL_TYPEUSER_HAS_PERMISOS.destroy({ where: { COD_TYPEUSERS } });
    if (TODO) {
      RolesForeachAllPermiso(COD_TYPEUSERS);
      return res.sendStatus(200);
    } else {
      RolesForeachPermiso(PERMISSION, COD_TYPEUSERS);
      return res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};

 exports.DeleteRole = async (req, res, next) => {
  const { COD_TYPEUSERS } = req.params;
  try {
    await PA_TypeUsers.destroy({
      where: { COD_TYPEUSERS },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.CreateRole = async (req, res, next) => {
  const { NOM_TYPE, DES_TYPE, PERMISSION, TODO } = req.body;
  console.log(req.body)
  try {
    const role = await PA_TypeUsers.create({ NOM_TYPE, DES_TYPE, USR_ADD:"sistema" });
    if (TODO) {
      RolesForeachAllPermiso(role.COD_TYPEUSERS);
      return res.sendStatus(200);
    } else {
      RolesForeachPermiso(PERMISSION, role.COD_TYPEUSERS);
      return res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};


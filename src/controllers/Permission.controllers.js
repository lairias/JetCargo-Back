const SE_PERMISOS = require("../models/security/SE_permisos")
const { Op } = require("sequelize")
const  {HttpError}  = require("../helpers/handleError")
const  USERS  = require("../models/Users")

 exports.VeryEmail = async (req, res, next) => {
  const { EMAIL, TOKEN, COD_USER } = req.params;
  try {
    const User = await USERS.findOne({ where: { EMAIL } });
    if (!User)
      return res.status(404).json({ message: "Usuario no encontrado" });
    await USERS.update(
      { API_TOKEN: null, IND_USR: 1, EMAIL_VERIFIED: 1 },
      {
        where: {
          API_TOKEN: TOKEN,
          [Op.and]: [{ EMAIL }, { COD_USER }],
        },
      }
    );
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetPermissionUser = async (req, res, next) => {
  try {
    const PermissionUser = await SE_PERMISOS.findAll();
    if (!PermissionUser)
      return res.status(203).json({ message: "Erro de procesp", ok: false });
    return res.status(200).json({ PermissionUser, ok: true });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetPermissionUserID = async (req, res, next) => {
   const { COD_PERMISO } = req.params;
  try {
    const PermissionUser = await SE_PERMISOS.findByPk(COD_PERMISO);
    if (!PermissionUser)
      return res.status(203).json({ message: "Erro de procesp" });
    return res.status(200).json({ PermissionUser });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.PutPermissionUser = async (req, res, next) => {
   const { COD_PERMISO } = req.params;
   const {DES_PERMISOS} = req.body;
  try {
     await SE_PERMISOS.update({
      DES_PERMISOS
    },{where:{COD_PERMISO}});
    return res.status(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


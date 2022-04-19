const  {HttpError}  = require("../helpers/handleError")
const  SE_SEGURIDAD  = require("../models/security/Se_seguridad")

exports.GetSeguridadID = async (req, res, next) => {
  const { COD_SEGURIDAD } = req.params;
  try {
    const permiso = await SE_SEGURIDAD.findByPk(COD_SEGURIDAD);
    return res.status(200).json(permiso);
  } catch (error) {
    HttpError(res, error);
    console.log(error);
  }
};
exports.UpdateSeguridaID = async (req, res, next) => {
  const { COD_SEGURIDAD } = req.params;
  const {DES_SEGURIDAD,NAM_SEGURIDAD, DATO_SEGURIDAD}= req.body;
  try {
    const permiso = await SE_SEGURIDAD.update({NAM_SEGURIDAD, DATO_SEGURIDAD, DES_SEGURIDAD},{where: {COD_SEGURIDAD}});
    return res.status(200).json(permiso);
  } catch (error) {
    HttpError(res, error);
    console.log(error);
  }
};
exports.GetSeguridad = async (req, res, next) => {
  try {
    const permiso = await SE_SEGURIDAD.findAll();
    return res.status(200).json(permiso);
  } catch (error) {
    HttpError(res, error);
    console.log(error);
  }
};


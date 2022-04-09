const  HttpError  = require("../helpers/handleError")
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


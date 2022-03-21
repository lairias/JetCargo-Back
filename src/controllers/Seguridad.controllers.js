import { HttpError } from "../helpers/handleError";
import { SE_SEGURIDAD } from "../models/security/Se_seguridad";


export const GetSeguridadID = async (req, res, next) => {
  const { COD_SEGURIDAD } = req.params;
  try {
    const permiso = await SE_SEGURIDAD.findByPk( COD_SEGURIDAD);
    return res.status(200).json(permiso);
  } catch (error) {
    HttpError(res, error);
    console.log(error);

  }
};



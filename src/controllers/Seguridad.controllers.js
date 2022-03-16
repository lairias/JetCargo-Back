import { HttpError } from "../helpers/handleError";
import { SE_PERMISOS } from "../models/security/SE_permisos";


export const GetSeguridadID = async (req, res, next) => {
  const { COD_PERMISO } = req.params;
  try {
    const permiso = await SE_PERMISOS.findByPk(COD_PERMISO);
    if(!JSON.stringify(permiso[0]))  res.status(203).json({ ok: false , permiso :false });
    res.status(200).json({ ok: true , permiso });
  } catch (error) {
    HttpError(res, error);
    console.log(error);

  }
};



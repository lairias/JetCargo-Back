import { SE_SEGURIDAD } from "../models/security/Se_seguridad";

export async function DatosInicioCoreo(COD_SEGURIDAD) {
  const data = await SE_SEGURIDAD.findByPk(COD_SEGURIDAD);
  return data.DATO_SEGURIDAD;
}

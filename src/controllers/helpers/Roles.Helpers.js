import { MODEL_TYPEUSER_HAS_PERMISOS } from "../../models/relations/typeusers_has_permisos";
import { SE_PERMISOS } from "../../models/security/SE_permisos";

export const RolesForeachPermiso = (PERMISSION, COD_TYPEUSERS) => {
  try {
    PERMISSION.forEach(async (element) => {
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISO: element,
        COD_TYPEUSERS: COD_TYPEUSERS,
      });
    });
  } catch (error) {
    console.log(error);
    return;
  }
};
export const RolesForeachAllPermiso = async (COD_TYPEUSERS) => {
  try {
    const allPermisos = await SE_PERMISOS.findAll();
    allPermisos.forEach(async (element) => {
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISO: element.COD_PERMISO,
        COD_TYPEUSERS: COD_TYPEUSERS,
      });
    });
  } catch (error) {
    console.log(error);
    return;
  }
};

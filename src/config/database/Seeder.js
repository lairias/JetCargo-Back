import { PA_TypeUsers } from "../../models/Pa_typeUsers";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../../models/relations/typeusers_has_permisos";
import { SE_PERMISOS } from "../../models/security/SE_permisos";
export const CreateRole = async () => {
  try {
    const count = await PA_TypeUsers.findAndCountAll();

    if (count > 0) {
      return;
    } else {
      const value = await Promise.all([
        await PA_TypeUsers.create({
          NOM_TYPE: "ADMIN",
          DES_TYPE: " Perfil administrador",
          USR_ADD: "admin",
        }),
        await PA_TypeUsers.create({
          NOM_TYPE: "CLIENTE",
          DES_TYPE: " Perfil cliente",
          USR_ADD: "admin",
        }),
        await PA_TypeUsers.create({
          NOM_TYPE: "EMPLEADO",
          DES_TYPE: " Perfil empleado",
          USR_ADD: "admin",
        }),
      ]);
    }
  } catch {}
};
export const CreatePemisoHasRol = async () => {
  try {
    const count = await MODEL_TYPEUSER_HAS_PERMISOS.findAndCountAll();

    if (count > 0) {
      return;
    } else {
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 1,
        COD_TYPEUSERS: 1,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 2,
        COD_TYPEUSERS: 1,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 3,
        COD_TYPEUSERS: 1,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 4,
        COD_TYPEUSERS: 1,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 5,
        COD_TYPEUSERS: 2,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 6,
        COD_TYPEUSERS: 2,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 7,
        COD_TYPEUSERS: 2,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 8,
        COD_TYPEUSERS: 2,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 9,
        COD_TYPEUSERS: 3,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 10,
        COD_TYPEUSERS: 3,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 11,
        COD_TYPEUSERS: 3,
      });
      await MODEL_TYPEUSER_HAS_PERMISOS.create({
        COD_PERMISOS: 12,
        COD_TYPEUSERS: 3,
      });
    }
  } catch {}
};
export const CreatePermisos = async () => {
  try {
    const count = await SE_PERMISOS.findAndCountAll();

    if (count > 0) {
      return;
    } else {
      await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.crear",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.view",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.update",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.delete",
        USR_ADD: "admin",
      });

      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.crear",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.view",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.update",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.delete",
        USR_ADD: "admin",
      });

      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.crear",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.view",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.update",
        USR_ADD: "admin",
      });
      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.delete",
        USR_ADD: "admin",
      });
    }
  } catch {}
};

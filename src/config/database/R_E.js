import { PA_POEPLE } from "../../models/Pa_people";
import { PA_TypeUsers } from "../../models/Pa_typeUsers"; //roles
import { USERS } from "../../models/Users";
import { PA_ADDRES } from "../../models/Pa_addres";
import { PA_CITIES } from "../../models/Pa_cities";
import { PA_STATES } from "../../models/Pa_states";
import { PA_COUNTRIES } from "../../models/Pa_countries";
import { PA_EMAIL } from "../../models/Pa_email";
import { PA_PHONES } from "../../models/Pa_phones";
import { SE_SEGURIDAD } from "../../models/security/Se_seguridad";

import { PA_CUSTOMES } from "../../models/Pa_customes";
import { Se_PASS_RESET } from "../../models/security/SE_pass_reset";


import { SE_PERMISOS } from "../../models/security/SE_permisos";
import { MODEL_HAS_PERMISOS } from "../../models/relations/MODEL_has_permisos";
import { MODEL_HAS_ROLES } from "../../models/relations/MODEL_has_typeUser";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../../models/relations/typeusers_has_permisos";

/**Entidad Relacioens de tablas */
import { REL_PEOPLE_PHONE } from "../../models/relations/REL_people_phone";
import { REL_PEOPLE_EMAIL } from "../../models/relations/REL_people_email";
import { REL_PEOPLE_ADDRES } from "../../models/relations/REL_people_addres";

//**Tablas de paquetes */
import { BO_SHIPPINGCOST } from "../../models/BO_ShippingCost";
import { BO_CATPACKAGE } from "../../models/BO_catPackage";
import { BO_LOCKER } from "../../models/BO_locker";
import { BO_PACKAGE } from "../../models/BO_package";
import { BO_TRACKING } from "../../models/BO_tracking";
import { BO_TYPEPACKAGE } from "../../models/BO_typePackage";

//Tablas de Pago
import { PAY_INVOICE } from "../../models/Pay_Invoice";
import { PAY_PAYMENTMETHOD } from "../../models/Pay_PaymentMethod";
import { LOG_ERROR } from "../../models/LOG_Errores";
import { LOGINFALLIDOS } from "../../models/LOG_LoginFallidos";

const relaciones = async () => {
  await PA_EMAIL.belongsToMany(PA_POEPLE, {
    through: REL_PEOPLE_EMAIL,
    foreignKey: "COD_EMAIL",
    onDelete: "CASCADE",
  });

  await PA_POEPLE.belongsToMany(PA_EMAIL, {
    through: REL_PEOPLE_EMAIL,
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });

  await PA_PHONES.belongsToMany(PA_POEPLE, {
    through: REL_PEOPLE_PHONE,
    foreignKey: "COD_PHONE",
    onDelete: "CASCADE",
  });

  await PA_POEPLE.belongsToMany(PA_PHONES, {
    through: REL_PEOPLE_PHONE,
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });

  await USERS.hasMany(LOGINFALLIDOS, {
    foreignKey: "COD_USER",
    onDelete: "CASCADE",
  });

  await PA_CITIES.hasMany(PA_ADDRES, {
    foreignKey: "COD_CITY",
    onDelete: "CASCADE",
  });

  await PA_COUNTRIES.hasMany(PA_ADDRES, {
    foreignKey: "COD_COUNTRY",
    onDelete: "CASCADE",
  });

  await PA_STATES.hasMany(PA_ADDRES, {
    foreignKey: "COD_STATE",
    onDelete: "CASCADE",
  });

  await PA_STATES.hasMany(PA_CITIES, {
    foreignKey: "COD_STATE",
    onDelete: "CASCADE",
  });
  await PA_COUNTRIES.hasMany(PA_STATES, {
    foreignKey: "COD_COUNTRY",
    onDelete: "CASCADE",
  });

  // Relaciones de tablas de roles

  await SE_PERMISOS.belongsToMany(USERS, {
    through: MODEL_HAS_PERMISOS,
    foreignKey: {
      name: "COD_PERMISO",
    },
    onDelete: "CASCADE",
  });

  await USERS.belongsToMany(SE_PERMISOS, {
    through: MODEL_HAS_PERMISOS,
    foreignKey: {
      name: "COD_USER",
    },
    onDelete: "CASCADE",
  });

  await SE_PERMISOS.hasMany(MODEL_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_PERMISO",
    },
  });
  await USERS.hasMany(MODEL_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_USER",
    },
  });

  //***************** */
  await PA_ADDRES.belongsToMany(PA_POEPLE, {
    through: REL_PEOPLE_ADDRES,
    foreignKey: {
      name: "COD_ADDRESS",
    },
    onDelete: "CASCADE",
  });

  await PA_POEPLE.belongsToMany(PA_ADDRES, {
    through: REL_PEOPLE_ADDRES,
    foreignKey: {
      name: "COD_PEOPLE",
    },
    onDelete: "CASCADE",
  });

  await PA_ADDRES.hasMany(REL_PEOPLE_ADDRES, {
    foreignKey: {
      name: "COD_ADDRESS",
    },
  });
  await PA_POEPLE.hasMany(REL_PEOPLE_ADDRES, {
    foreignKey: {
      name: "COD_PEOPLE",
    },
  });

  /********** ********************************************************************************/
  await SE_PERMISOS.belongsToMany(PA_TypeUsers, {
    through: MODEL_TYPEUSER_HAS_PERMISOS,
    foreignKey: {
      name: "COD_PERMISO",
    },
    onDelete: "CASCADE",
  });

  await PA_TypeUsers.belongsToMany(SE_PERMISOS, {
    through: MODEL_TYPEUSER_HAS_PERMISOS,
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
    onDelete: "CASCADE",
  });

  await SE_PERMISOS.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_PERMISO",
    },
  });

  await PA_TypeUsers.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
  });

  /********************************************************************* */
  await PA_TypeUsers.belongsToMany(USERS, {
    through: MODEL_HAS_ROLES,
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
    onDelete: "CASCADE",
  });

  await USERS.belongsToMany(PA_TypeUsers, {
    through: MODEL_HAS_ROLES,
    foreignKey: {
      name: "COD_USER",
    },
    onDelete: "CASCADE",
  });

  await PA_TypeUsers.hasMany(MODEL_HAS_ROLES, {
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
  });
  await USERS.hasMany(MODEL_HAS_ROLES, {
    foreignKey: {
      name: "COD_USER",
    },
  });

  /******************************* */
  await PA_POEPLE.hasMany(BO_LOCKER, {
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });
  await USERS.hasMany(PA_CUSTOMES, {
    foreignKey: "COD_USER",
    onDelete: "CASCADE",
  });
  await BO_PACKAGE.hasMany(BO_SHIPPINGCOST, {
    foreignKey: "COD_PACKAGE",
    onDelete: "CASCADE",
  });
  await BO_PACKAGE.hasMany(BO_TRACKING, {
    foreignKey: "COD_PACKAGE",
    onDelete: "CASCADE",
  });
  await PA_POEPLE.hasMany(PAY_PAYMENTMETHOD, {
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });
  await PA_POEPLE.hasMany(PAY_INVOICE, {
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });
  await BO_SHIPPINGCOST.hasMany(PAY_INVOICE, {
    foreignKey: "COD_SHIPPINGCOST",
    onDelete: "CASCADE",
  });
  await PAY_PAYMENTMETHOD.hasMany(PAY_INVOICE, {
    foreignKey: "COD_PAYMENTMETHOD",
    onDelete: "CASCADE",
  });

  await BO_CATPACKAGE.hasMany(BO_PACKAGE, {
    foreignKey: "COD_CATPACKAGE",
    onDelete: "CASCADE",
  });
  await BO_TYPEPACKAGE.hasMany(BO_PACKAGE, {
    foreignKey: "COD_TYPEPACKAGE",
    onDelete: "CASCADE",
  });
  await BO_LOCKER.hasMany(BO_PACKAGE, {
    foreignKey: "COD_LOCKER",
    onDelete: "CASCADE",
  });
};

relaciones();

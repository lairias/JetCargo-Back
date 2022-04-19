const  PA_POEPLE  =require( "../../models/Pa_people.js")
const   PA_TypeUsers  =require( "../../models/Pa_typeUsers.js")//roles
const   USERS  =require( "../../models/Users.js")
const   PA_ADDRES  =require( "../../models/Pa_addres.js")
const   PA_CITIES  =require( "../../models/Pa_cities.js")
const   PA_STATES  =require( "../../models/Pa_states.js")
const   PA_COUNTRIES  =require( "../../models/Pa_countries.js")
const   PA_EMAIL  =require( "../../models/Pa_email.js")
const   PA_PHONES  =require( "../../models/Pa_phones.js")
const   SE_SEGURIDAD  =require( "../../models/security/Se_seguridad.js")

const   PA_CUSTOMES  =require( "../../models/Pa_customes.js")
const   Se_PASS_RESET  =require( "../../models/security/SE_pass_reset.js")

const   DE_ORDEN  =require( "../../models/DE_orden.js")
const   DE_SERVICE  =require( "../../models/DE_service.js")
const   DE_TRACKING_INFORMATION_ORIGEN  =require( "../../models/DE_trackingInformationOrigin.js")
const   DE_TRACKING_INFORMATION_DESTINO  =require( "../../models/DE_trackingInformationDestino.js")
const   REL_ORDEN_TRACKING  =require( "../../models/relations/REL_orden_tracking.js")

const   SE_PERMISOS  =require( "../../models/security/SE_permisos.js")
const   MODEL_HAS_PERMISOS  =require( "../../models/relations/MODEL_has_permisos.js")
const   MODEL_HAS_ROLES  =require( "../../models/relations/MODEL_has_typeUser.js")
const   MODEL_TYPEUSER_HAS_PERMISOS  =require( "../../models/relations/typeusers_has_permisos.js")

/**Entidad Relacioens de tablas */
const   REL_PEOPLE_PHONE  =require( "../../models/relations/REL_people_phone.js")
const   REL_PEOPLE_EMAIL  =require( "../../models/relations/REL_people_email.js")
const   REL_PEOPLE_ADDRES  =require( "../../models/relations/REL_people_addres.js")

//**Tablas de paquetes */
const   BO_SHIPPINGCOST  =require( "../../models/BO_ShippingCost.js")
const   BO_CATPACKAGE  =require( "../../models/BO_catPackage.js")
const   BO_LOCKER  =require( "../../models/BO_locker.js")
const   BO_PACKAGE  =require( "../../models/BO_package.js")
const   BO_TRACKING  =require( "../../models/BO_tracking.js")
const   BO_TYPEPACKAGE  =require( "../../models/BO_typePackage.js")

//Tablas de Pago
const   PAY_INVOICE  =require( "../../models/Pay_Invoice.js")
const   PAY_PAYMENTMETHOD  =require( "../../models/Pay_PaymentMethod.js")
const   LOG_ERROR  =require( "../../models/LOG_Errores.js")
const   LOGINFALLIDOS  =require( "../../models/LOG_LoginFallidos.js")
const   REL_CUSTOMER_LOKER  =require( "../../models/relations/REL_customer_locker.js")
const   REL_PACKAGE_LOKER  =require( "../../models/relations/REL_package_lokers.js")
const   REL_LOCKER_PHONE  =require( "../../models/relations/REL_locker_phone.js")
const   REL_ORIGIN_DESTINO  =require( "../../models/relations/REL_Origin_Destino.js")

   DE_ORDEN.belongsToMany(BO_TRACKING, {
    through: REL_ORDEN_TRACKING,
    foreignKey: "COD_ORDEN",
    onDelete: "CASCADE",
  });
   BO_TRACKING.belongsToMany(DE_ORDEN, {
    through: REL_ORDEN_TRACKING,
    foreignKey: "COD_TRACKING",
    onDelete: "CASCADE",
  });
   BO_TRACKING.hasMany(DE_ORDEN, {
    foreignKey: "COD_TRACKING",
    onDelete: "CASCADE",
  });
   DE_ORDEN.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
    foreignKey: "COD_ORDEN",
    onDelete: "CASCADE",
  });
   DE_ORDEN.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
    foreignKey: "COD_ORDEN",
    onDelete: "CASCADE",
  });
   PA_COUNTRIES.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
    foreignKey: "COD_DESTINATION_COUNTRY",
    onDelete: "CASCADE",
  });
   PA_CITIES.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
    foreignKey: "COD_DESTINATION_CITY",
    onDelete: "CASCADE",
  });
   PA_CITIES.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
    foreignKey: "COD_ORIGIN_CITY",
    onDelete: "CASCADE",
  });

   PA_COUNTRIES.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
    foreignKey: "COD_ORIGIN_COUNTRY",
    onDelete: "CASCADE",
  });

   PA_STATES.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
    foreignKey: "COD_DESTINATION_STATE",
    onDelete: "CASCADE",
  });

   PA_STATES.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
    foreignKey: "COD_ORIGIN_STATE",
    onDelete: "CASCADE",
  });

   DE_SERVICE.hasMany(BO_TRACKING, {
    foreignKey: "COD_SERVICE",
    onDelete: "CASCADE",
  });

   BO_PACKAGE.hasMany(REL_PACKAGE_LOKER, {
    foreignKey: "COD_PACKAGE",
    onDelete: "CASCADE",
  });
   PA_CUSTOMES.hasMany(REL_PACKAGE_LOKER, {
    foreignKey: "COD_CUSTOMER",
    onDelete: "CASCADE",
  });
   BO_LOCKER.hasMany(REL_PACKAGE_LOKER, {
    foreignKey: "COD_LOCKER",
    onDelete: "CASCADE",
  });
   BO_TRACKING.hasMany(REL_PACKAGE_LOKER, {
    foreignKey: "COD_TRACKING",
    onDelete: "CASCADE",
  });
   BO_LOCKER.belongsToMany(PA_CUSTOMES, {
    through: REL_CUSTOMER_LOKER,
    foreignKey: "COD_LOCKER",
    onDelete: "CASCADE",
  });
   PA_CUSTOMES.belongsToMany(BO_LOCKER, {
    through: REL_CUSTOMER_LOKER,
    foreignKey: "COD_CUSTOMER",
    onDelete: "CASCADE",
  });

   PA_EMAIL.belongsToMany(PA_POEPLE, {
    through: REL_PEOPLE_EMAIL,
    foreignKey: "COD_EMAIL",
    onDelete: "CASCADE",
  });
   DE_TRACKING_INFORMATION_DESTINO.hasMany(REL_ORIGIN_DESTINO, {
    foreignKey: "COD_DESTINO",
    onDelete: "CASCADE",
  });

   DE_TRACKING_INFORMATION_ORIGEN.hasMany(REL_ORIGIN_DESTINO, {
    foreignKey: "COD_ORIGIN",
    onDelete: "CASCADE",
  });
   DE_ORDEN.hasMany(REL_ORIGIN_DESTINO, {
    foreignKey: "COD_ORDEN",
    onDelete: "CASCADE",
  });

   PA_POEPLE.belongsToMany(PA_EMAIL, {
    through: REL_PEOPLE_EMAIL,
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });
   PA_PHONES.belongsToMany(PA_POEPLE, {
    through: REL_PEOPLE_PHONE,
    foreignKey: "COD_PHONE",
    onDelete: "CASCADE",
  });
   PA_POEPLE.belongsToMany(PA_PHONES, {
    through: REL_PEOPLE_PHONE,
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });

   BO_LOCKER.belongsToMany(PA_PHONES, {
    through: REL_LOCKER_PHONE,
    foreignKey: "COD_LOCKER",
    onDelete: "CASCADE",
  });
   PA_PHONES.belongsToMany(BO_LOCKER, {
    through: REL_LOCKER_PHONE,
    foreignKey: "COD_PHONE",
    onDelete: "CASCADE",
  });

   USERS.hasMany(LOGINFALLIDOS, {
    foreignKey: "COD_USER",
    onDelete: "CASCADE",
  });
   PA_CITIES.hasMany(PA_ADDRES, {
    foreignKey: "COD_CITY",
    onDelete: "CASCADE",
  });

   PA_COUNTRIES.hasMany(PA_ADDRES, {
    foreignKey: "COD_COUNTRY",
    onDelete: "CASCADE",
  });

   PA_STATES.hasMany(PA_ADDRES, {
    foreignKey: "COD_STATE",
    onDelete: "CASCADE",
  });

   PA_STATES.hasMany(PA_CITIES, {
    foreignKey: "COD_STATE",
    onDelete: "CASCADE",
  });
   PA_COUNTRIES.hasMany(PA_STATES, {
    foreignKey: "COD_COUNTRY",
    onDelete: "CASCADE",
  });

  // Relaciones de tablas de roles

   SE_PERMISOS.belongsToMany(USERS, {
    through: MODEL_HAS_PERMISOS,
    foreignKey: {
      name: "COD_PERMISO",
    },
    onDelete: "CASCADE",
  });

   USERS.belongsToMany(SE_PERMISOS, {
    through: MODEL_HAS_PERMISOS,
    foreignKey: {
      name: "COD_USER",
    },
    onDelete: "CASCADE",
  });

   SE_PERMISOS.hasMany(MODEL_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_PERMISO",
    },
  });
   USERS.hasMany(MODEL_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_USER",
    },
  });

  //***************** */
   PA_ADDRES.belongsToMany(PA_POEPLE, {
    through: REL_PEOPLE_ADDRES,
    foreignKey: {
      name: "COD_ADDRESS",
    },
    onDelete: "CASCADE",
  });

   PA_POEPLE.belongsToMany(PA_ADDRES, {
    through: REL_PEOPLE_ADDRES,
    foreignKey: {
      name: "COD_PEOPLE",
    },
    onDelete: "CASCADE",
  });

   PA_ADDRES.hasMany(REL_PEOPLE_ADDRES, {
    foreignKey: {
      name: "COD_ADDRESS",
    },
  });
   PA_POEPLE.hasMany(REL_PEOPLE_ADDRES, {
    foreignKey: {
      name: "COD_PEOPLE",
    },
  });

  /********** ********************************************************************************/
   SE_PERMISOS.belongsToMany(PA_TypeUsers, {
    through: MODEL_TYPEUSER_HAS_PERMISOS,
    foreignKey: {
      name: "COD_PERMISO",
    },
    onDelete: "CASCADE",
  });

   PA_TypeUsers.belongsToMany(SE_PERMISOS, {
    through: MODEL_TYPEUSER_HAS_PERMISOS,
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
    onDelete: "CASCADE",
  });

   SE_PERMISOS.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_PERMISO",
    },
  });

   PA_TypeUsers.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
  });

  /********************************************************************* */
   PA_TypeUsers.belongsToMany(USERS, {
    through: MODEL_HAS_ROLES,
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
    onDelete: "CASCADE",
  });

   USERS.belongsToMany(PA_TypeUsers, {
    through: MODEL_HAS_ROLES,
    foreignKey: {
      name: "COD_USER",
    },
    onDelete: "CASCADE",
  });

   PA_TypeUsers.hasMany(MODEL_HAS_ROLES, {
    foreignKey: {
      name: "COD_TYPEUSERS",
    },
  });
   USERS.hasMany(MODEL_HAS_ROLES, {
    foreignKey: {
      name: "COD_USER",
    },
  });
  
  /******************************* */
  BO_SHIPPINGCOST.hasMany(BO_TYPEPACKAGE, {
    foreignKey: "COD_SHIPPINGCOST",
    onDelete: "CASCADE",
  });
   USERS.hasMany(PA_CUSTOMES, {
    foreignKey: "COD_USER",
    onDelete: "CASCADE",
  });
  
   BO_PACKAGE.hasMany(BO_TRACKING, {
    foreignKey: "COD_PACKAGE",
    onDelete: "CASCADE",
  });
   PA_POEPLE.hasMany(PAY_PAYMENTMETHOD, {
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });
   PA_POEPLE.hasMany(PAY_INVOICE, {
    foreignKey: "COD_PEOPLE",
    onDelete: "CASCADE",
  });
   BO_SHIPPINGCOST.hasMany(PAY_INVOICE, {
    foreignKey: "COD_SHIPPINGCOST",
    onDelete: "CASCADE",
  });
   PAY_PAYMENTMETHOD.hasMany(PAY_INVOICE, {
    foreignKey: "COD_PAYMENTMETHOD",
    onDelete: "CASCADE",
  });

   BO_CATPACKAGE.hasMany(BO_PACKAGE, {
    foreignKey: "COD_CATPACKAGE",
    onDelete: "CASCADE",
  });
   BO_TYPEPACKAGE.hasMany(BO_PACKAGE, {
    foreignKey: "COD_TYPEPACKAGE",
    onDelete: "CASCADE",
  });


"use strict";

var PA_POEPLE = require("../../models/Pa_people.js");

var PA_TypeUsers = require("../../models/Pa_typeUsers.js"); //roles


var USERS = require("../../models/Users.js");

var PA_ADDRES = require("../../models/Pa_addres.js");

var PA_CITIES = require("../../models/Pa_cities.js");

var PA_STATES = require("../../models/Pa_states.js");

var PA_COUNTRIES = require("../../models/Pa_countries.js");

var PA_EMAIL = require("../../models/Pa_email.js");

var PA_PHONES = require("../../models/Pa_phones.js");

var SE_SEGURIDAD = require("../../models/security/Se_seguridad.js");

var PA_CUSTOMES = require("../../models/Pa_customes.js");

var Se_PASS_RESET = require("../../models/security/SE_pass_reset.js");

var DE_ORDEN = require("../../models/DE_orden.js");

var DE_SERVICE = require("../../models/DE_service.js");

var DE_TRACKING_INFORMATION_ORIGEN = require("../../models/DE_trackingInformationOrigin.js");

var DE_TRACKING_INFORMATION_DESTINO = require("../../models/DE_trackingInformationDestino.js");

var REL_ORDEN_TRACKING = require("../../models/relations/REL_orden_tracking.js");

var SE_PERMISOS = require("../../models/security/SE_permisos.js");

var MODEL_HAS_PERMISOS = require("../../models/relations/MODEL_has_permisos.js");

var MODEL_HAS_ROLES = require("../../models/relations/MODEL_has_typeUser.js");

var MODEL_TYPEUSER_HAS_PERMISOS = require("../../models/relations/typeusers_has_permisos.js");
/**Entidad Relacioens de tablas */


var REL_PEOPLE_PHONE = require("../../models/relations/REL_people_phone.js");

var REL_PEOPLE_EMAIL = require("../../models/relations/REL_people_email.js");

var REL_PEOPLE_ADDRES = require("../../models/relations/REL_people_addres.js"); //**Tablas de paquetes */


var BO_SHIPPINGCOST = require("../../models/BO_ShippingCost.js");

var BO_CATPACKAGE = require("../../models/BO_catPackage.js");

var BO_LOCKER = require("../../models/BO_locker.js");

var BO_PACKAGE = require("../../models/BO_package.js");

var BO_TRACKING = require("../../models/BO_tracking.js");

var BO_TYPEPACKAGE = require("../../models/BO_typePackage.js"); //Tablas de Pago


var PAY_INVOICE = require("../../models/Pay_Invoice.js");

var PAY_PAYMENTMETHOD = require("../../models/Pay_PaymentMethod.js");

var LOG_ERROR = require("../../models/LOG_Errores.js");

var LOGINFALLIDOS = require("../../models/LOG_LoginFallidos.js");

var REL_CUSTOMER_LOKER = require("../../models/relations/REL_customer_locker.js");

var REL_PACKAGE_LOKER = require("../../models/relations/REL_package_lokers.js");

var REL_LOCKER_PHONE = require("../../models/relations/REL_locker_phone.js");

var REL_ORIGIN_DESTINO = require("../../models/relations/REL_Origin_Destino.js");

DE_ORDEN.belongsToMany(BO_TRACKING, {
  through: REL_ORDEN_TRACKING,
  foreignKey: "COD_ORDEN",
  onDelete: "CASCADE"
});
BO_TRACKING.belongsToMany(DE_ORDEN, {
  through: REL_ORDEN_TRACKING,
  foreignKey: "COD_TRACKING",
  onDelete: "CASCADE"
});
BO_TRACKING.hasMany(DE_ORDEN, {
  foreignKey: "COD_TRACKING",
  onDelete: "CASCADE"
});
DE_ORDEN.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
  foreignKey: "COD_ORDEN",
  onDelete: "CASCADE"
});
DE_ORDEN.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
  foreignKey: "COD_ORDEN",
  onDelete: "CASCADE"
});
PA_COUNTRIES.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
  foreignKey: "COD_DESTINATION_COUNTRY",
  onDelete: "CASCADE"
});
PA_CITIES.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
  foreignKey: "COD_DESTINATION_CITY",
  onDelete: "CASCADE"
});
PA_CITIES.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
  foreignKey: "COD_ORIGIN_CITY",
  onDelete: "CASCADE"
});
PA_COUNTRIES.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
  foreignKey: "COD_ORIGIN_COUNTRY",
  onDelete: "CASCADE"
});
PA_STATES.hasMany(DE_TRACKING_INFORMATION_DESTINO, {
  foreignKey: "COD_DESTINATION_STATE",
  onDelete: "CASCADE"
});
PA_STATES.hasMany(DE_TRACKING_INFORMATION_ORIGEN, {
  foreignKey: "COD_ORIGIN_STATE",
  onDelete: "CASCADE"
});
DE_SERVICE.hasMany(BO_TRACKING, {
  foreignKey: "COD_SERVICE",
  onDelete: "CASCADE"
});
BO_PACKAGE.hasMany(REL_PACKAGE_LOKER, {
  foreignKey: "COD_PACKAGE",
  onDelete: "CASCADE"
});
PA_CUSTOMES.hasMany(REL_PACKAGE_LOKER, {
  foreignKey: "COD_CUSTOMER",
  onDelete: "CASCADE"
});
BO_LOCKER.hasMany(REL_PACKAGE_LOKER, {
  foreignKey: "COD_LOCKER",
  onDelete: "CASCADE"
});
BO_TRACKING.hasMany(REL_PACKAGE_LOKER, {
  foreignKey: "COD_TRACKING",
  onDelete: "CASCADE"
});
BO_LOCKER.belongsToMany(PA_CUSTOMES, {
  through: REL_CUSTOMER_LOKER,
  foreignKey: "COD_LOCKER",
  onDelete: "CASCADE"
});
PA_CUSTOMES.belongsToMany(BO_LOCKER, {
  through: REL_CUSTOMER_LOKER,
  foreignKey: "COD_CUSTOMER",
  onDelete: "CASCADE"
});
PA_EMAIL.belongsToMany(PA_POEPLE, {
  through: REL_PEOPLE_EMAIL,
  foreignKey: "COD_EMAIL",
  onDelete: "CASCADE"
});
DE_TRACKING_INFORMATION_DESTINO.hasMany(REL_ORIGIN_DESTINO, {
  foreignKey: "COD_DESTINO",
  onDelete: "CASCADE"
});
DE_TRACKING_INFORMATION_ORIGEN.hasMany(REL_ORIGIN_DESTINO, {
  foreignKey: "COD_ORIGIN",
  onDelete: "CASCADE"
});
DE_ORDEN.hasMany(REL_ORIGIN_DESTINO, {
  foreignKey: "COD_ORDEN",
  onDelete: "CASCADE"
});
PA_POEPLE.belongsToMany(PA_EMAIL, {
  through: REL_PEOPLE_EMAIL,
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE"
});
PA_PHONES.belongsToMany(PA_POEPLE, {
  through: REL_PEOPLE_PHONE,
  foreignKey: "COD_PHONE",
  onDelete: "CASCADE"
});
PA_POEPLE.belongsToMany(PA_PHONES, {
  through: REL_PEOPLE_PHONE,
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE"
});
BO_LOCKER.belongsToMany(PA_PHONES, {
  through: REL_LOCKER_PHONE,
  foreignKey: "COD_LOCKER",
  onDelete: "CASCADE"
});
PA_PHONES.belongsToMany(BO_LOCKER, {
  through: REL_LOCKER_PHONE,
  foreignKey: "COD_PHONE",
  onDelete: "CASCADE"
});
USERS.hasMany(LOGINFALLIDOS, {
  foreignKey: "COD_USER",
  onDelete: "CASCADE"
});
PA_CITIES.hasMany(PA_ADDRES, {
  foreignKey: "COD_CITY",
  onDelete: "CASCADE"
});
PA_COUNTRIES.hasMany(PA_ADDRES, {
  foreignKey: "COD_COUNTRY",
  onDelete: "CASCADE"
});
PA_STATES.hasMany(PA_ADDRES, {
  foreignKey: "COD_STATE",
  onDelete: "CASCADE"
});
PA_STATES.hasMany(PA_CITIES, {
  foreignKey: "COD_STATE",
  onDelete: "CASCADE"
});
PA_COUNTRIES.hasMany(PA_STATES, {
  foreignKey: "COD_COUNTRY",
  onDelete: "CASCADE"
}); // Relaciones de tablas de roles

SE_PERMISOS.belongsToMany(USERS, {
  through: MODEL_HAS_PERMISOS,
  foreignKey: {
    name: "COD_PERMISO"
  },
  onDelete: "CASCADE"
});
USERS.belongsToMany(SE_PERMISOS, {
  through: MODEL_HAS_PERMISOS,
  foreignKey: {
    name: "COD_USER"
  },
  onDelete: "CASCADE"
});
SE_PERMISOS.hasMany(MODEL_HAS_PERMISOS, {
  foreignKey: {
    name: "COD_PERMISO"
  }
});
USERS.hasMany(MODEL_HAS_PERMISOS, {
  foreignKey: {
    name: "COD_USER"
  }
}); //***************** */

PA_ADDRES.belongsToMany(PA_POEPLE, {
  through: REL_PEOPLE_ADDRES,
  foreignKey: {
    name: "COD_ADDRESS"
  },
  onDelete: "CASCADE"
});
PA_POEPLE.belongsToMany(PA_ADDRES, {
  through: REL_PEOPLE_ADDRES,
  foreignKey: {
    name: "COD_PEOPLE"
  },
  onDelete: "CASCADE"
});
PA_ADDRES.hasMany(REL_PEOPLE_ADDRES, {
  foreignKey: {
    name: "COD_ADDRESS"
  }
});
PA_POEPLE.hasMany(REL_PEOPLE_ADDRES, {
  foreignKey: {
    name: "COD_PEOPLE"
  }
});
/********** ********************************************************************************/

SE_PERMISOS.belongsToMany(PA_TypeUsers, {
  through: MODEL_TYPEUSER_HAS_PERMISOS,
  foreignKey: {
    name: "COD_PERMISO"
  },
  onDelete: "CASCADE"
});
PA_TypeUsers.belongsToMany(SE_PERMISOS, {
  through: MODEL_TYPEUSER_HAS_PERMISOS,
  foreignKey: {
    name: "COD_TYPEUSERS"
  },
  onDelete: "CASCADE"
});
SE_PERMISOS.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
  foreignKey: {
    name: "COD_PERMISO"
  }
});
PA_TypeUsers.hasMany(MODEL_TYPEUSER_HAS_PERMISOS, {
  foreignKey: {
    name: "COD_TYPEUSERS"
  }
});
/********************************************************************* */

PA_TypeUsers.belongsToMany(USERS, {
  through: MODEL_HAS_ROLES,
  foreignKey: {
    name: "COD_TYPEUSERS"
  },
  onDelete: "CASCADE"
});
USERS.belongsToMany(PA_TypeUsers, {
  through: MODEL_HAS_ROLES,
  foreignKey: {
    name: "COD_USER"
  },
  onDelete: "CASCADE"
});
PA_TypeUsers.hasMany(MODEL_HAS_ROLES, {
  foreignKey: {
    name: "COD_TYPEUSERS"
  }
});
USERS.hasMany(MODEL_HAS_ROLES, {
  foreignKey: {
    name: "COD_USER"
  }
});
/******************************* */

PA_POEPLE.hasMany(BO_LOCKER, {
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE"
});
USERS.hasMany(PA_CUSTOMES, {
  foreignKey: "COD_USER",
  onDelete: "CASCADE"
});
BO_PACKAGE.hasMany(BO_SHIPPINGCOST, {
  foreignKey: "COD_PACKAGE",
  onDelete: "CASCADE"
});
BO_PACKAGE.hasMany(BO_TRACKING, {
  foreignKey: "COD_PACKAGE",
  onDelete: "CASCADE"
});
PA_POEPLE.hasMany(PAY_PAYMENTMETHOD, {
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE"
});
PA_POEPLE.hasMany(PAY_INVOICE, {
  foreignKey: "COD_PEOPLE",
  onDelete: "CASCADE"
});
BO_SHIPPINGCOST.hasMany(PAY_INVOICE, {
  foreignKey: "COD_SHIPPINGCOST",
  onDelete: "CASCADE"
});
PAY_PAYMENTMETHOD.hasMany(PAY_INVOICE, {
  foreignKey: "COD_PAYMENTMETHOD",
  onDelete: "CASCADE"
});
BO_CATPACKAGE.hasMany(BO_PACKAGE, {
  foreignKey: "COD_CATPACKAGE",
  onDelete: "CASCADE"
});
BO_TYPEPACKAGE.hasMany(BO_PACKAGE, {
  foreignKey: "COD_TYPEPACKAGE",
  onDelete: "CASCADE"
});
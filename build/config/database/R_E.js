"use strict";

var _Pa_people = require("../../models/Pa_people");

var _Pa_typeUsers = require("../../models/Pa_typeUsers");

var _Users = require("../../models/Users");

var _Pa_addres = require("../../models/Pa_addres");

var _Pa_cities = require("../../models/Pa_cities");

var _Pa_states = require("../../models/Pa_states");

var _Pa_countries = require("../../models/Pa_countries");

var _Pa_email = require("../../models/Pa_email");

var _Pa_phones = require("../../models/Pa_phones");

var _Se_seguridad = require("../../models/security/Se_seguridad");

var _Pa_customes = require("../../models/Pa_customes");

var _SE_pass_reset = require("../../models/security/SE_pass_reset");

var _DE_orden = require("../../models/DE_orden");

var _DE_service = require("../../models/DE_service");

var _DE_trackingInformationOrigin = require("../../models/DE_trackingInformationOrigin");

var _DE_trackingInformationDestino = require("../../models/DE_trackingInformationDestino");

var _REL_orden_tracking = require("../../models/relations/REL_orden_tracking");

var _SE_permisos = require("../../models/security/SE_permisos");

var _MODEL_has_permisos = require("../../models/relations/MODEL_has_permisos");

var _MODEL_has_typeUser = require("../../models/relations/MODEL_has_typeUser");

var _typeusers_has_permisos = require("../../models/relations/typeusers_has_permisos");

var _REL_people_phone = require("../../models/relations/REL_people_phone");

var _REL_people_email = require("../../models/relations/REL_people_email");

var _REL_people_addres = require("../../models/relations/REL_people_addres");

var _BO_ShippingCost = require("../../models/BO_ShippingCost");

var _BO_catPackage = require("../../models/BO_catPackage");

var _BO_locker = require("../../models/BO_locker");

var _BO_package = require("../../models/BO_package");

var _BO_tracking = require("../../models/BO_tracking");

var _BO_typePackage = require("../../models/BO_typePackage");

var _Pay_Invoice = require("../../models/Pay_Invoice");

var _Pay_PaymentMethod = require("../../models/Pay_PaymentMethod");

var _LOG_Errores = require("../../models/LOG_Errores");

var _LOG_LoginFallidos = require("../../models/LOG_LoginFallidos");

var _REL_customer_locker = require("../../models/relations/REL_customer_locker");

var _REL_package_lokers = require("../../models/relations/REL_package_lokers");

var _REL_locker_phone = require("../../models/relations/REL_locker_phone");

var _REL_Origin_Destino = require("../../models/relations/REL_Origin_Destino");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var relaciones = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DE_orden.DE_ORDEN.belongsToMany(_BO_tracking.BO_TRACKING, {
              through: _REL_orden_tracking.REL_ORDEN_TRACKING,
              foreignKey: "COD_ORDEN",
              onDelete: "CASCADE"
            });

          case 2:
            _context.next = 4;
            return _BO_tracking.BO_TRACKING.belongsToMany(_DE_orden.DE_ORDEN, {
              through: _REL_orden_tracking.REL_ORDEN_TRACKING,
              foreignKey: "COD_TRACKING",
              onDelete: "CASCADE"
            });

          case 4:
            _context.next = 6;
            return _BO_tracking.BO_TRACKING.hasMany(_DE_orden.DE_ORDEN, {
              foreignKey: "COD_TRACKING",
              onDelete: "CASCADE"
            });

          case 6:
            _context.next = 8;
            return _DE_orden.DE_ORDEN.hasMany(_DE_trackingInformationDestino.DE_TRACKING_INFORMATION_DESTINO, {
              foreignKey: "COD_ORDEN",
              onDelete: "CASCADE"
            });

          case 8:
            _context.next = 10;
            return _DE_orden.DE_ORDEN.hasMany(_DE_trackingInformationOrigin.DE_TRACKING_INFORMATION_ORIGEN, {
              foreignKey: "COD_ORDEN",
              onDelete: "CASCADE"
            });

          case 10:
            _context.next = 12;
            return _Pa_countries.PA_COUNTRIES.hasMany(_DE_trackingInformationDestino.DE_TRACKING_INFORMATION_DESTINO, {
              foreignKey: "COD_DESTINATION_COUNTRY",
              onDelete: "CASCADE"
            });

          case 12:
            _context.next = 14;
            return _Pa_cities.PA_CITIES.hasMany(_DE_trackingInformationDestino.DE_TRACKING_INFORMATION_DESTINO, {
              foreignKey: "COD_DESTINATION_CITY",
              onDelete: "CASCADE"
            });

          case 14:
            _context.next = 16;
            return _Pa_cities.PA_CITIES.hasMany(_DE_trackingInformationOrigin.DE_TRACKING_INFORMATION_ORIGEN, {
              foreignKey: "COD_ORIGIN_CITY",
              onDelete: "CASCADE"
            });

          case 16:
            _context.next = 18;
            return _Pa_countries.PA_COUNTRIES.hasMany(_DE_trackingInformationOrigin.DE_TRACKING_INFORMATION_ORIGEN, {
              foreignKey: "COD_ORIGIN_COUNTRY",
              onDelete: "CASCADE"
            });

          case 18:
            _context.next = 20;
            return _Pa_states.PA_STATES.hasMany(_DE_trackingInformationDestino.DE_TRACKING_INFORMATION_DESTINO, {
              foreignKey: "COD_DESTINATION_STATE",
              onDelete: "CASCADE"
            });

          case 20:
            _context.next = 22;
            return _Pa_states.PA_STATES.hasMany(_DE_trackingInformationOrigin.DE_TRACKING_INFORMATION_ORIGEN, {
              foreignKey: "COD_ORIGIN_STATE",
              onDelete: "CASCADE"
            });

          case 22:
            _context.next = 24;
            return _DE_service.DE_SERVICE.hasMany(_BO_tracking.BO_TRACKING, {
              foreignKey: "COD_SERVICE",
              onDelete: "CASCADE"
            });

          case 24:
            _context.next = 26;
            return _BO_package.BO_PACKAGE.hasMany(_REL_package_lokers.REL_PACKAGE_LOKER, {
              foreignKey: "COD_PACKAGE",
              onDelete: "CASCADE"
            });

          case 26:
            _context.next = 28;
            return _Pa_customes.PA_CUSTOMES.hasMany(_REL_package_lokers.REL_PACKAGE_LOKER, {
              foreignKey: "COD_CUSTOMER",
              onDelete: "CASCADE"
            });

          case 28:
            _context.next = 30;
            return _BO_locker.BO_LOCKER.hasMany(_REL_package_lokers.REL_PACKAGE_LOKER, {
              foreignKey: "COD_LOCKER",
              onDelete: "CASCADE"
            });

          case 30:
            _context.next = 32;
            return _BO_tracking.BO_TRACKING.hasMany(_REL_package_lokers.REL_PACKAGE_LOKER, {
              foreignKey: "COD_TRACKING",
              onDelete: "CASCADE"
            });

          case 32:
            _context.next = 34;
            return _BO_locker.BO_LOCKER.belongsToMany(_Pa_customes.PA_CUSTOMES, {
              through: _REL_customer_locker.REL_CUSTOMER_LOKER,
              foreignKey: "COD_LOCKER",
              onDelete: "CASCADE"
            });

          case 34:
            _context.next = 36;
            return _Pa_customes.PA_CUSTOMES.belongsToMany(_BO_locker.BO_LOCKER, {
              through: _REL_customer_locker.REL_CUSTOMER_LOKER,
              foreignKey: "COD_CUSTOMER",
              onDelete: "CASCADE"
            });

          case 36:
            _context.next = 38;
            return _Pa_email.PA_EMAIL.belongsToMany(_Pa_people.PA_POEPLE, {
              through: _REL_people_email.REL_PEOPLE_EMAIL,
              foreignKey: "COD_EMAIL",
              onDelete: "CASCADE"
            });

          case 38:
            _context.next = 40;
            return _DE_trackingInformationDestino.DE_TRACKING_INFORMATION_DESTINO.hasMany(_REL_Origin_Destino.REL_ORIGIN_DESTINO, {
              foreignKey: "COD_DESTINO",
              onDelete: "CASCADE"
            });

          case 40:
            _context.next = 42;
            return _DE_trackingInformationOrigin.DE_TRACKING_INFORMATION_ORIGEN.hasMany(_REL_Origin_Destino.REL_ORIGIN_DESTINO, {
              foreignKey: "COD_ORIGIN",
              onDelete: "CASCADE"
            });

          case 42:
            _context.next = 44;
            return _DE_orden.DE_ORDEN.hasMany(_REL_Origin_Destino.REL_ORIGIN_DESTINO, {
              foreignKey: "COD_ORDEN",
              onDelete: "CASCADE"
            });

          case 44:
            _context.next = 46;
            return _Pa_people.PA_POEPLE.belongsToMany(_Pa_email.PA_EMAIL, {
              through: _REL_people_email.REL_PEOPLE_EMAIL,
              foreignKey: "COD_PEOPLE",
              onDelete: "CASCADE"
            });

          case 46:
            _context.next = 48;
            return _Pa_phones.PA_PHONES.belongsToMany(_Pa_people.PA_POEPLE, {
              through: _REL_people_phone.REL_PEOPLE_PHONE,
              foreignKey: "COD_PHONE",
              onDelete: "CASCADE"
            });

          case 48:
            _context.next = 50;
            return _Pa_people.PA_POEPLE.belongsToMany(_Pa_phones.PA_PHONES, {
              through: _REL_people_phone.REL_PEOPLE_PHONE,
              foreignKey: "COD_PEOPLE",
              onDelete: "CASCADE"
            });

          case 50:
            _context.next = 52;
            return _BO_locker.BO_LOCKER.belongsToMany(_Pa_phones.PA_PHONES, {
              through: _REL_locker_phone.REL_LOCKER_PHONE,
              foreignKey: "COD_LOCKER",
              onDelete: "CASCADE"
            });

          case 52:
            _context.next = 54;
            return _Pa_phones.PA_PHONES.belongsToMany(_BO_locker.BO_LOCKER, {
              through: _REL_locker_phone.REL_LOCKER_PHONE,
              foreignKey: "COD_PHONE",
              onDelete: "CASCADE"
            });

          case 54:
            _context.next = 56;
            return _Users.USERS.hasMany(_LOG_LoginFallidos.LOGINFALLIDOS, {
              foreignKey: "COD_USER",
              onDelete: "CASCADE"
            });

          case 56:
            _context.next = 58;
            return _Pa_cities.PA_CITIES.hasMany(_Pa_addres.PA_ADDRES, {
              foreignKey: "COD_CITY",
              onDelete: "CASCADE"
            });

          case 58:
            _context.next = 60;
            return _Pa_countries.PA_COUNTRIES.hasMany(_Pa_addres.PA_ADDRES, {
              foreignKey: "COD_COUNTRY",
              onDelete: "CASCADE"
            });

          case 60:
            _context.next = 62;
            return _Pa_states.PA_STATES.hasMany(_Pa_addres.PA_ADDRES, {
              foreignKey: "COD_STATE",
              onDelete: "CASCADE"
            });

          case 62:
            _context.next = 64;
            return _Pa_states.PA_STATES.hasMany(_Pa_cities.PA_CITIES, {
              foreignKey: "COD_STATE",
              onDelete: "CASCADE"
            });

          case 64:
            _context.next = 66;
            return _Pa_countries.PA_COUNTRIES.hasMany(_Pa_states.PA_STATES, {
              foreignKey: "COD_COUNTRY",
              onDelete: "CASCADE"
            });

          case 66:
            _context.next = 68;
            return _SE_permisos.SE_PERMISOS.belongsToMany(_Users.USERS, {
              through: _MODEL_has_permisos.MODEL_HAS_PERMISOS,
              foreignKey: {
                name: "COD_PERMISO"
              },
              onDelete: "CASCADE"
            });

          case 68:
            _context.next = 70;
            return _Users.USERS.belongsToMany(_SE_permisos.SE_PERMISOS, {
              through: _MODEL_has_permisos.MODEL_HAS_PERMISOS,
              foreignKey: {
                name: "COD_USER"
              },
              onDelete: "CASCADE"
            });

          case 70:
            _context.next = 72;
            return _SE_permisos.SE_PERMISOS.hasMany(_MODEL_has_permisos.MODEL_HAS_PERMISOS, {
              foreignKey: {
                name: "COD_PERMISO"
              }
            });

          case 72:
            _context.next = 74;
            return _Users.USERS.hasMany(_MODEL_has_permisos.MODEL_HAS_PERMISOS, {
              foreignKey: {
                name: "COD_USER"
              }
            });

          case 74:
            _context.next = 76;
            return _Pa_addres.PA_ADDRES.belongsToMany(_Pa_people.PA_POEPLE, {
              through: _REL_people_addres.REL_PEOPLE_ADDRES,
              foreignKey: {
                name: "COD_ADDRESS"
              },
              onDelete: "CASCADE"
            });

          case 76:
            _context.next = 78;
            return _Pa_people.PA_POEPLE.belongsToMany(_Pa_addres.PA_ADDRES, {
              through: _REL_people_addres.REL_PEOPLE_ADDRES,
              foreignKey: {
                name: "COD_PEOPLE"
              },
              onDelete: "CASCADE"
            });

          case 78:
            _context.next = 80;
            return _Pa_addres.PA_ADDRES.hasMany(_REL_people_addres.REL_PEOPLE_ADDRES, {
              foreignKey: {
                name: "COD_ADDRESS"
              }
            });

          case 80:
            _context.next = 82;
            return _Pa_people.PA_POEPLE.hasMany(_REL_people_addres.REL_PEOPLE_ADDRES, {
              foreignKey: {
                name: "COD_PEOPLE"
              }
            });

          case 82:
            _context.next = 84;
            return _SE_permisos.SE_PERMISOS.belongsToMany(_Pa_typeUsers.PA_TypeUsers, {
              through: _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS,
              foreignKey: {
                name: "COD_PERMISO"
              },
              onDelete: "CASCADE"
            });

          case 84:
            _context.next = 86;
            return _Pa_typeUsers.PA_TypeUsers.belongsToMany(_SE_permisos.SE_PERMISOS, {
              through: _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS,
              foreignKey: {
                name: "COD_TYPEUSERS"
              },
              onDelete: "CASCADE"
            });

          case 86:
            _context.next = 88;
            return _SE_permisos.SE_PERMISOS.hasMany(_typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS, {
              foreignKey: {
                name: "COD_PERMISO"
              }
            });

          case 88:
            _context.next = 90;
            return _Pa_typeUsers.PA_TypeUsers.hasMany(_typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS, {
              foreignKey: {
                name: "COD_TYPEUSERS"
              }
            });

          case 90:
            _context.next = 92;
            return _Pa_typeUsers.PA_TypeUsers.belongsToMany(_Users.USERS, {
              through: _MODEL_has_typeUser.MODEL_HAS_ROLES,
              foreignKey: {
                name: "COD_TYPEUSERS"
              },
              onDelete: "CASCADE"
            });

          case 92:
            _context.next = 94;
            return _Users.USERS.belongsToMany(_Pa_typeUsers.PA_TypeUsers, {
              through: _MODEL_has_typeUser.MODEL_HAS_ROLES,
              foreignKey: {
                name: "COD_USER"
              },
              onDelete: "CASCADE"
            });

          case 94:
            _context.next = 96;
            return _Pa_typeUsers.PA_TypeUsers.hasMany(_MODEL_has_typeUser.MODEL_HAS_ROLES, {
              foreignKey: {
                name: "COD_TYPEUSERS"
              }
            });

          case 96:
            _context.next = 98;
            return _Users.USERS.hasMany(_MODEL_has_typeUser.MODEL_HAS_ROLES, {
              foreignKey: {
                name: "COD_USER"
              }
            });

          case 98:
            _context.next = 100;
            return _Pa_people.PA_POEPLE.hasMany(_BO_locker.BO_LOCKER, {
              foreignKey: "COD_PEOPLE",
              onDelete: "CASCADE"
            });

          case 100:
            _context.next = 102;
            return _Users.USERS.hasMany(_Pa_customes.PA_CUSTOMES, {
              foreignKey: "COD_USER",
              onDelete: "CASCADE"
            });

          case 102:
            _context.next = 104;
            return _BO_package.BO_PACKAGE.hasMany(_BO_ShippingCost.BO_SHIPPINGCOST, {
              foreignKey: "COD_PACKAGE",
              onDelete: "CASCADE"
            });

          case 104:
            _context.next = 106;
            return _BO_package.BO_PACKAGE.hasMany(_BO_tracking.BO_TRACKING, {
              foreignKey: "COD_PACKAGE",
              onDelete: "CASCADE"
            });

          case 106:
            _context.next = 108;
            return _Pa_people.PA_POEPLE.hasMany(_Pay_PaymentMethod.PAY_PAYMENTMETHOD, {
              foreignKey: "COD_PEOPLE",
              onDelete: "CASCADE"
            });

          case 108:
            _context.next = 110;
            return _Pa_people.PA_POEPLE.hasMany(_Pay_Invoice.PAY_INVOICE, {
              foreignKey: "COD_PEOPLE",
              onDelete: "CASCADE"
            });

          case 110:
            _context.next = 112;
            return _BO_ShippingCost.BO_SHIPPINGCOST.hasMany(_Pay_Invoice.PAY_INVOICE, {
              foreignKey: "COD_SHIPPINGCOST",
              onDelete: "CASCADE"
            });

          case 112:
            _context.next = 114;
            return _Pay_PaymentMethod.PAY_PAYMENTMETHOD.hasMany(_Pay_Invoice.PAY_INVOICE, {
              foreignKey: "COD_PAYMENTMETHOD",
              onDelete: "CASCADE"
            });

          case 114:
            _context.next = 116;
            return _BO_catPackage.BO_CATPACKAGE.hasMany(_BO_package.BO_PACKAGE, {
              foreignKey: "COD_CATPACKAGE",
              onDelete: "CASCADE"
            });

          case 116:
            _context.next = 118;
            return _BO_typePackage.BO_TYPEPACKAGE.hasMany(_BO_package.BO_PACKAGE, {
              foreignKey: "COD_TYPEPACKAGE",
              onDelete: "CASCADE"
            });

          case 118:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function relaciones() {
    return _ref.apply(this, arguments);
  };
}();

relaciones();
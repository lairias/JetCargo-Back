"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUser = exports.CreateTypePackage = exports.CreateStates = exports.CreateService = exports.CreateSeguri = exports.CreateRole = exports.CreatePermisos = exports.CreatePemisoHasRol = exports.CreateLocker = exports.CreateContries = exports.CreateCities = exports.CreateCatPackage = void 0;

var _BO_catPackage = require("../../models/BO_catPackage");

var _BO_locker = require("../../models/BO_locker");

var _BO_typePackage = require("../../models/BO_typePackage");

var _DE_service = require("../../models/DE_service");

var _Pa_cities = require("../../models/Pa_cities");

var _Pa_countries = require("../../models/Pa_countries");

var _Pa_customes = require("../../models/Pa_customes");

var _Pa_people = require("../../models/Pa_people");

var _Pa_phones = require("../../models/Pa_phones");

var _Pa_states = require("../../models/Pa_states");

var _Pa_typeUsers = require("../../models/Pa_typeUsers");

var _MODEL_has_typeUser = require("../../models/relations/MODEL_has_typeUser");

var _REL_locker_phone = require("../../models/relations/REL_locker_phone");

var _typeusers_has_permisos = require("../../models/relations/typeusers_has_permisos");

var _SE_permisos = require("../../models/security/SE_permisos");

var _Se_seguridad = require("../../models/security/Se_seguridad");

var _Users = require("../../models/Users");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var count;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Pa_typeUsers.PA_TypeUsers.count();

          case 2:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            _context.prev = 7;
            _context.t0 = Promise;
            _context.next = 11;
            return _Pa_typeUsers.PA_TypeUsers.create({
              NOM_TYPE: "ADMIN",
              DES_TYPE: " Perfil administrador",
              USR_ADD: "admin"
            });

          case 11:
            _context.t1 = _context.sent;
            _context.next = 14;
            return _Pa_typeUsers.PA_TypeUsers.create({
              NOM_TYPE: "CLIENTE",
              DES_TYPE: " Perfil cliente",
              USR_ADD: "admin"
            });

          case 14:
            _context.t2 = _context.sent;
            _context.next = 17;
            return _Pa_typeUsers.PA_TypeUsers.create({
              NOM_TYPE: "EMPLEADO",
              DES_TYPE: " Perfil empleado",
              USR_ADD: "admin"
            });

          case 17:
            _context.t3 = _context.sent;
            _context.t4 = [_context.t1, _context.t2, _context.t3];
            _context.next = 21;
            return _context.t0.all.call(_context.t0, _context.t4);

          case 21:
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t5 = _context["catch"](7);
            console.log(_context.t5);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 23]]);
  }));

  return function CreateRole() {
    return _ref.apply(this, arguments);
  };
}();

exports.CreateRole = CreateRole;

var CreatePemisoHasRol = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var count, admin, cliente, empleado;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS.count();

          case 2:
            count = _context5.sent;

            if (!(count > 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return");

          case 7:
            _context5.prev = 7;
            admin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 95, 96, 97];
            cliente = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 68, 72, 76];
            empleado = [15, 22, 26, 27, 58, 66, 70, 71, 72, 73, 74, 75, 76];
            _context5.next = 13;
            return Promise.all([admin.forEach( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(element) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS.create({
                          COD_PERMISO: element,
                          COD_TYPEUSERS: 1
                        });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }()), cliente.forEach( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(element) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS.create({
                          COD_PERMISO: element,
                          COD_TYPEUSERS: 2
                        });

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x2) {
                return _ref4.apply(this, arguments);
              };
            }()), empleado.forEach( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(element) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS.create({
                          COD_PERMISO: element,
                          COD_TYPEUSERS: 3
                        });

                      case 2:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x3) {
                return _ref5.apply(this, arguments);
              };
            }())]);

          case 13:
            _context5.next = 18;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](7);
            console.log(_context5.t0);

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 15]]);
  }));

  return function CreatePemisoHasRol() {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreatePemisoHasRol = CreatePemisoHasRol;

var CreatePermisos = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var count;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _SE_permisos.SE_PERMISOS.count();

          case 2:
            count = _context6.sent;

            if (!(count > 0)) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return");

          case 7:
            _context6.prev = 7;
            _context6.t0 = Promise;
            _context6.next = 11;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.inicio",
              DES_PERMISOS: "Ver administrador"
            });

          case 11:
            _context6.t1 = _context6.sent;
            _context6.next = 14;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.seguimiento",
              DES_PERMISOS: "Crear administrador"
            });

          case 14:
            _context6.t2 = _context6.sent;
            _context6.next = 17;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.seguimiento.express",
              DES_PERMISOS: "Crear administrador"
            });

          case 17:
            _context6.t3 = _context6.sent;
            _context6.next = 20;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.seguimiento.avion",
              DES_PERMISOS: "Crear administrador"
            });

          case 20:
            _context6.t4 = _context6.sent;
            _context6.next = 23;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.seguimiento.maritimo",
              DES_PERMISOS: "Crear administrador"
            });

          case 23:
            _context6.t5 = _context6.sent;
            _context6.next = 26;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.roles",
              DES_PERMISOS: "Crear administrador"
            });

          case 26:
            _context6.t6 = _context6.sent;
            _context6.next = 29;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.categorias",
              DES_PERMISOS: "Crear administrador"
            });

          case 29:
            _context6.t7 = _context6.sent;
            _context6.next = 32;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.seguridad",
              DES_PERMISOS: "Crear administrador"
            });

          case 32:
            _context6.t8 = _context6.sent;
            _context6.next = 35;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.paypal",
              DES_PERMISOS: "Crear administrador"
            });

          case 35:
            _context6.t9 = _context6.sent;
            _context6.next = 38;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.usurario",
              DES_PERMISOS: "Crear administrador"
            });

          case 38:
            _context6.t10 = _context6.sent;
            _context6.next = 41;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.customers",
              DES_PERMISOS: "Crear administrador"
            });

          case 41:
            _context6.t11 = _context6.sent;
            _context6.next = 44;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.people",
              DES_PERMISOS: "Crear administrador"
            });

          case 44:
            _context6.t12 = _context6.sent;
            _context6.next = 47;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.lockers",
              DES_PERMISOS: "Crear administrador"
            });

          case 47:
            _context6.t13 = _context6.sent;
            _context6.next = 50;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "dasboard.packages",
              DES_PERMISOS: "Crear administrador"
            });

          case 50:
            _context6.t14 = _context6.sent;
            _context6.next = 53;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "profile.view",
              DES_PERMISOS: "Ver administrador"
            });

          case 53:
            _context6.t15 = _context6.sent;
            _context6.next = 56;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "notificaciones.view",
              DES_PERMISOS: "Ver administrador"
            });

          case 56:
            _context6.t16 = _context6.sent;
            _context6.next = 59;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "profile.edit",
              DES_PERMISOS: "Ver administrador"
            });

          case 59:
            _context6.t17 = _context6.sent;
            _context6.next = 62;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "seguimiento.crear",
              DES_PERMISOS: "Crear administrador"
            });

          case 62:
            _context6.t18 = _context6.sent;
            _context6.next = 65;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "seguimiento.view",
              DES_PERMISOS: "Crear administrador"
            });

          case 65:
            _context6.t19 = _context6.sent;
            _context6.next = 68;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "seguimiento.update",
              DES_PERMISOS: "Crear administrador"
            });

          case 68:
            _context6.t20 = _context6.sent;
            _context6.next = 71;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "seguimiento.delete",
              DES_PERMISOS: "Crear administrador"
            });

          case 71:
            _context6.t21 = _context6.sent;
            _context6.next = 74;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "admin.crear",
              DES_PERMISOS: "Crear administrador"
            });

          case 74:
            _context6.t22 = _context6.sent;
            _context6.next = 77;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "admin.view",
              DES_PERMISOS: "Ver administrador"
            });

          case 77:
            _context6.t23 = _context6.sent;
            _context6.next = 80;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "admin.update",
              DES_PERMISOS: "Actualizar administrador"
            });

          case 80:
            _context6.t24 = _context6.sent;
            _context6.next = 83;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "admin.delete",
              DES_PERMISOS: "Eliminar administrador"
            });

          case 83:
            _context6.t25 = _context6.sent;
            _context6.next = 86;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "city.crear",
              DES_PERMISOS: "Crear ciudad"
            });

          case 86:
            _context6.t26 = _context6.sent;
            _context6.next = 89;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "city.view",
              DES_PERMISOS: "Ver ciudad"
            });

          case 89:
            _context6.t27 = _context6.sent;
            _context6.next = 92;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "city.update",
              DES_PERMISOS: "Actualizar ciudad"
            });

          case 92:
            _context6.t28 = _context6.sent;
            _context6.next = 95;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "city.delete",
              DES_PERMISOS: "Eliminar ciudad"
            });

          case 95:
            _context6.t29 = _context6.sent;
            _context6.next = 98;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "categoripaquete.crear",
              DES_PERMISOS: "Crear categoria de paquetes"
            });

          case 98:
            _context6.t30 = _context6.sent;
            _context6.next = 101;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "categoripaquete.view",
              DES_PERMISOS: "Ver categoria de paquetes"
            });

          case 101:
            _context6.t31 = _context6.sent;
            _context6.next = 104;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "categoripaquete.update",
              DES_PERMISOS: "Actualizar categoria de paquetes"
            });

          case 104:
            _context6.t32 = _context6.sent;
            _context6.next = 107;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "categoripaquete.delete",
              DES_PERMISOS: "Eliminar categoria de paquetes"
            });

          case 107:
            _context6.t33 = _context6.sent;
            _context6.next = 110;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "locker.crear",
              DES_PERMISOS: "Crear Locker"
            });

          case 110:
            _context6.t34 = _context6.sent;
            _context6.next = 113;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "locker.view",
              DES_PERMISOS: "Ver Locker"
            });

          case 113:
            _context6.t35 = _context6.sent;
            _context6.next = 116;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "locker.update",
              DES_PERMISOS: "Actualizar Locker"
            });

          case 116:
            _context6.t36 = _context6.sent;
            _context6.next = 119;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "locker.delete",
              DES_PERMISOS: "Eliminar Locker"
            });

          case 119:
            _context6.t37 = _context6.sent;
            _context6.next = 122;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "package.crear",
              DES_PERMISOS: "Crear Package"
            });

          case 122:
            _context6.t38 = _context6.sent;
            _context6.next = 125;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "package.view",
              DES_PERMISOS: "Ver Package"
            });

          case 125:
            _context6.t39 = _context6.sent;
            _context6.next = 128;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "package.update",
              DES_PERMISOS: "Actualizar Package"
            });

          case 128:
            _context6.t40 = _context6.sent;
            _context6.next = 131;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "package.delete",
              DES_PERMISOS: "Eliminar Package"
            });

          case 131:
            _context6.t41 = _context6.sent;
            _context6.next = 134;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "costodeenvio.crear",
              DES_PERMISOS: "Crear Costo de envio"
            });

          case 134:
            _context6.t42 = _context6.sent;
            _context6.next = 137;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "costodeenvio.view",
              DES_PERMISOS: "Ver Costo de envio"
            });

          case 137:
            _context6.t43 = _context6.sent;
            _context6.next = 140;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "costodeenvio.update",
              DES_PERMISOS: "Actualizar Costo de envio"
            });

          case 140:
            _context6.t44 = _context6.sent;
            _context6.next = 143;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "costodeenvio.delete",
              DES_PERMISOS: "Eliminar Costo de envio"
            });

          case 143:
            _context6.t45 = _context6.sent;
            _context6.next = 146;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "tracking.crear",
              DES_PERMISOS: "Crear tracking"
            });

          case 146:
            _context6.t46 = _context6.sent;
            _context6.next = 149;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "tracking.view",
              DES_PERMISOS: "Ver tracking"
            });

          case 149:
            _context6.t47 = _context6.sent;
            _context6.next = 152;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "tracking.update",
              DES_PERMISOS: "Actualizar tracking"
            });

          case 152:
            _context6.t48 = _context6.sent;
            _context6.next = 155;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "tracking.delete",
              DES_PERMISOS: "Eliminar tracking"
            });

          case 155:
            _context6.t49 = _context6.sent;
            _context6.next = 158;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typepackage.crear",
              DES_PERMISOS: "Crear tipo de paquete"
            });

          case 158:
            _context6.t50 = _context6.sent;
            _context6.next = 161;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typepackage.view",
              DES_PERMISOS: "Ver tipo de paquete"
            });

          case 161:
            _context6.t51 = _context6.sent;
            _context6.next = 164;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typepackage.update",
              DES_PERMISOS: "Actualizar tipo de paquete"
            });

          case 164:
            _context6.t52 = _context6.sent;
            _context6.next = 167;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typepackage.delete",
              DES_PERMISOS: "Eliminar tipo de paquete"
            });

          case 167:
            _context6.t53 = _context6.sent;
            _context6.next = 170;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "addres.crear",
              DES_PERMISOS: "Crear dirrección"
            });

          case 170:
            _context6.t54 = _context6.sent;
            _context6.next = 173;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "addres.view",
              DES_PERMISOS: "Ver dirrección"
            });

          case 173:
            _context6.t55 = _context6.sent;
            _context6.next = 176;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "addres.update",
              DES_PERMISOS: "Actualizar dirrección"
            });

          case 176:
            _context6.t56 = _context6.sent;
            _context6.next = 179;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "addres.delete",
              DES_PERMISOS: "Eliminar dirrección"
            });

          case 179:
            _context6.t57 = _context6.sent;
            _context6.next = 182;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "country.crear",
              DES_PERMISOS: "Crear país"
            });

          case 182:
            _context6.t58 = _context6.sent;
            _context6.next = 185;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "country.view",
              DES_PERMISOS: "Ver país"
            });

          case 185:
            _context6.t59 = _context6.sent;
            _context6.next = 188;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "country.update",
              DES_PERMISOS: "Actualizar país"
            });

          case 188:
            _context6.t60 = _context6.sent;
            _context6.next = 191;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "country.delete",
              DES_PERMISOS: "Eliminar país"
            });

          case 191:
            _context6.t61 = _context6.sent;
            _context6.next = 194;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "customes.crear",
              DES_PERMISOS: "Crear cliente"
            });

          case 194:
            _context6.t62 = _context6.sent;
            _context6.next = 197;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "customes.view",
              DES_PERMISOS: "Ver cliente"
            });

          case 197:
            _context6.t63 = _context6.sent;
            _context6.next = 200;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "customes.update",
              DES_PERMISOS: "Actualizar cliente"
            });

          case 200:
            _context6.t64 = _context6.sent;
            _context6.next = 203;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "customes.delete",
              DES_PERMISOS: "Eliminar cliente"
            });

          case 203:
            _context6.t65 = _context6.sent;
            _context6.next = 206;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "email.crear",
              DES_PERMISOS: "Crear email"
            });

          case 206:
            _context6.t66 = _context6.sent;
            _context6.next = 209;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "email.view",
              DES_PERMISOS: "Ver email"
            });

          case 209:
            _context6.t67 = _context6.sent;
            _context6.next = 212;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "email.update",
              DES_PERMISOS: "Actualizar email"
            });

          case 212:
            _context6.t68 = _context6.sent;
            _context6.next = 215;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "email.delete",
              DES_PERMISOS: "Eliminar email"
            });

          case 215:
            _context6.t69 = _context6.sent;
            _context6.next = 218;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "people.crear",
              DES_PERMISOS: "Crear personas"
            });

          case 218:
            _context6.t70 = _context6.sent;
            _context6.next = 221;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "people.view",
              DES_PERMISOS: "Ver personas"
            });

          case 221:
            _context6.t71 = _context6.sent;
            _context6.next = 224;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "people.update",
              DES_PERMISOS: "Actualizar personas"
            });

          case 224:
            _context6.t72 = _context6.sent;
            _context6.next = 227;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "people.delete",
              DES_PERMISOS: "Eliminar personas"
            });

          case 227:
            _context6.t73 = _context6.sent;
            _context6.next = 230;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "phone.crear",
              DES_PERMISOS: "Crear teléfono"
            });

          case 230:
            _context6.t74 = _context6.sent;
            _context6.next = 233;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "phone.view",
              DES_PERMISOS: "Ver teléfono"
            });

          case 233:
            _context6.t75 = _context6.sent;
            _context6.next = 236;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "phone.update",
              DES_PERMISOS: "Actualizar teléfono"
            });

          case 236:
            _context6.t76 = _context6.sent;
            _context6.next = 239;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "phone.delete",
              DES_PERMISOS: "Eliminar teléfono"
            });

          case 239:
            _context6.t77 = _context6.sent;
            _context6.next = 242;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "states.crear",
              DES_PERMISOS: "Crear departamento"
            });

          case 242:
            _context6.t78 = _context6.sent;
            _context6.next = 245;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "states.view",
              DES_PERMISOS: "Ver departamento"
            });

          case 245:
            _context6.t79 = _context6.sent;
            _context6.next = 248;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "states.update",
              DES_PERMISOS: "Actualizar departamento"
            });

          case 248:
            _context6.t80 = _context6.sent;
            _context6.next = 251;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "states.delete",
              DES_PERMISOS: "Eliminar departamento"
            });

          case 251:
            _context6.t81 = _context6.sent;
            _context6.next = 254;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typeuser.crear",
              DES_PERMISOS: "Crear rol"
            });

          case 254:
            _context6.t82 = _context6.sent;
            _context6.next = 257;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typeuser.view",
              DES_PERMISOS: "Ver rol"
            });

          case 257:
            _context6.t83 = _context6.sent;
            _context6.next = 260;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typeuser.update",
              DES_PERMISOS: "Actualizar rol"
            });

          case 260:
            _context6.t84 = _context6.sent;
            _context6.next = 263;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "typeuser.delete",
              DES_PERMISOS: "Eliminar rol"
            });

          case 263:
            _context6.t85 = _context6.sent;
            _context6.next = 266;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "user.crear",
              DES_PERMISOS: "Crear usuario"
            });

          case 266:
            _context6.t86 = _context6.sent;
            _context6.next = 269;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "user.view",
              DES_PERMISOS: "Ver usuario"
            });

          case 269:
            _context6.t87 = _context6.sent;
            _context6.next = 272;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "user.update",
              DES_PERMISOS: "Actualizar usuario"
            });

          case 272:
            _context6.t88 = _context6.sent;
            _context6.next = 275;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "user.delete",
              DES_PERMISOS: "Eliminar usuario"
            });

          case 275:
            _context6.t89 = _context6.sent;
            _context6.next = 278;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "methopay.crear",
              DES_PERMISOS: "Crear metodo de pago"
            });

          case 278:
            _context6.t90 = _context6.sent;
            _context6.next = 281;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "methopay.view",
              DES_PERMISOS: "Ver metodo de pago"
            });

          case 281:
            _context6.t91 = _context6.sent;
            _context6.next = 284;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "methopay.update",
              DES_PERMISOS: "Actualizar metodo de pago"
            });

          case 284:
            _context6.t92 = _context6.sent;
            _context6.next = 287;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "methopay.delete",
              DES_PERMISOS: "Eliminar metodo de pago"
            });

          case 287:
            _context6.t93 = _context6.sent;
            _context6.next = 290;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "invoice.crear",
              DES_PERMISOS: "Crear factura"
            });

          case 290:
            _context6.t94 = _context6.sent;
            _context6.next = 293;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "invoice.view",
              DES_PERMISOS: "Ver factura"
            });

          case 293:
            _context6.t95 = _context6.sent;
            _context6.next = 296;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "invoice.update",
              DES_PERMISOS: "Actualizar factura"
            });

          case 296:
            _context6.t96 = _context6.sent;
            _context6.next = 299;
            return _SE_permisos.SE_PERMISOS.create({
              NAM_PERMISOS: "invoice.delete",
              DES_PERMISOS: "Eliminar factura"
            });

          case 299:
            _context6.t97 = _context6.sent;
            _context6.t98 = [_context6.t1, _context6.t2, _context6.t3, _context6.t4, _context6.t5, _context6.t6, _context6.t7, _context6.t8, _context6.t9, _context6.t10, _context6.t11, _context6.t12, _context6.t13, _context6.t14, _context6.t15, _context6.t16, _context6.t17, _context6.t18, _context6.t19, _context6.t20, _context6.t21, _context6.t22, _context6.t23, _context6.t24, _context6.t25, _context6.t26, _context6.t27, _context6.t28, _context6.t29, _context6.t30, _context6.t31, _context6.t32, _context6.t33, _context6.t34, _context6.t35, _context6.t36, _context6.t37, _context6.t38, _context6.t39, _context6.t40, _context6.t41, _context6.t42, _context6.t43, _context6.t44, _context6.t45, _context6.t46, _context6.t47, _context6.t48, _context6.t49, _context6.t50, _context6.t51, _context6.t52, _context6.t53, _context6.t54, _context6.t55, _context6.t56, _context6.t57, _context6.t58, _context6.t59, _context6.t60, _context6.t61, _context6.t62, _context6.t63, _context6.t64, _context6.t65, _context6.t66, _context6.t67, _context6.t68, _context6.t69, _context6.t70, _context6.t71, _context6.t72, _context6.t73, _context6.t74, _context6.t75, _context6.t76, _context6.t77, _context6.t78, _context6.t79, _context6.t80, _context6.t81, _context6.t82, _context6.t83, _context6.t84, _context6.t85, _context6.t86, _context6.t87, _context6.t88, _context6.t89, _context6.t90, _context6.t91, _context6.t92, _context6.t93, _context6.t94, _context6.t95, _context6.t96, _context6.t97];
            _context6.next = 303;
            return _context6.t0.all.call(_context6.t0, _context6.t98);

          case 303:
            _context6.next = 308;
            break;

          case 305:
            _context6.prev = 305;
            _context6.t99 = _context6["catch"](7);
            console.log(_context6.t99);

          case 308:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[7, 305]]);
  }));

  return function CreatePermisos() {
    return _ref6.apply(this, arguments);
  };
}();

exports.CreatePermisos = CreatePermisos;

var CreateContries = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var count;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Pa_countries.PA_COUNTRIES.count();

          case 2:
            count = _context7.sent;

            if (!(count > 0)) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return");

          case 7:
            _context7.prev = 7;
            _context7.t0 = Promise;
            _context7.next = 11;
            return _Pa_countries.PA_COUNTRIES.create({
              NAM_COUNTRY: "Honduras",
              DES_COUNTRY: "Pais Centroamericano",
              AREA_COUNTRY: "504",
              USR_ADD: "admin"
            });

          case 11:
            _context7.t1 = _context7.sent;
            _context7.next = 14;
            return _Pa_countries.PA_COUNTRIES.create({
              NAM_COUNTRY: "El Salvador",
              DES_COUNTRY: "Pais Centroamericano",
              AREA_COUNTRY: "503",
              USR_ADD: "admin"
            });

          case 14:
            _context7.t2 = _context7.sent;
            _context7.next = 17;
            return _Pa_countries.PA_COUNTRIES.create({
              NAM_COUNTRY: "Estados Unidos",
              DES_COUNTRY: "Estados Unidos de América",
              AREA_COUNTRY: " ",
              USR_ADD: "admin"
            });

          case 17:
            _context7.t3 = _context7.sent;
            _context7.t4 = [_context7.t1, _context7.t2, _context7.t3];
            _context7.next = 21;
            return _context7.t0.all.call(_context7.t0, _context7.t4);

          case 21:
            _context7.next = 26;
            break;

          case 23:
            _context7.prev = 23;
            _context7.t5 = _context7["catch"](7);
            console.log(_context7.t5);

          case 26:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[7, 23]]);
  }));

  return function CreateContries() {
    return _ref7.apply(this, arguments);
  };
}();

exports.CreateContries = CreateContries;

var CreateStates = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var count;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Pa_states.PA_STATES.count();

          case 2:
            count = _context8.sent;

            if (!(count > 0)) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return");

          case 7:
            _context8.prev = 7;
            _context8.t0 = Promise;
            _context8.next = 11;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Atlantida",
              DES_STATE: "Atlantida",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 11:
            _context8.t1 = _context8.sent;
            _context8.next = 14;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Colon",
              DES_STATE: "Colon",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 14:
            _context8.t2 = _context8.sent;
            _context8.next = 17;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Comayagua",
              DES_STATE: "Comayagua",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 17:
            _context8.t3 = _context8.sent;
            _context8.next = 20;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Copan",
              DES_STATE: "Copan",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 20:
            _context8.t4 = _context8.sent;
            _context8.next = 23;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Cortes",
              DES_STATE: "Cortes",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 23:
            _context8.t5 = _context8.sent;
            _context8.next = 26;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Choluteca",
              DES_STATE: "Choluteca",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 26:
            _context8.t6 = _context8.sent;
            _context8.next = 29;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "El Paraiso",
              DES_STATE: "El Paraíso",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 29:
            _context8.t7 = _context8.sent;
            _context8.next = 32;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Francisco Morazan",
              DES_STATE: "Francisco Morazán",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 32:
            _context8.t8 = _context8.sent;
            _context8.next = 35;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Gracias a Dios",
              DES_STATE: "Gracias a Dios",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 35:
            _context8.t9 = _context8.sent;
            _context8.next = 38;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Intibuca",
              DES_STATE: "Intibucá",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 38:
            _context8.t10 = _context8.sent;
            _context8.next = 41;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "La Paz",
              DES_STATE: "La Paz",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 41:
            _context8.t11 = _context8.sent;
            _context8.next = 44;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Lempira",
              DES_STATE: "Lempira",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 44:
            _context8.t12 = _context8.sent;
            _context8.next = 47;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Ocotepeque",
              DES_STATE: "Ocotepeque",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 47:
            _context8.t13 = _context8.sent;
            _context8.next = 50;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Olancho",
              DES_STATE: "Olancho",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 50:
            _context8.t14 = _context8.sent;
            _context8.next = 53;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Santa Barbara",
              DES_STATE: "Santa Barbara",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 53:
            _context8.t15 = _context8.sent;
            _context8.next = 56;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Valle",
              DES_STATE: "Valle",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 56:
            _context8.t16 = _context8.sent;
            _context8.next = 59;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Yoro",
              DES_STATE: "Yoro",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 59:
            _context8.t17 = _context8.sent;
            _context8.next = 62;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: " Islas de la Bahia",
              DES_STATE: "Islas de la Bahía",
              USR_ADD: "admin",
              COD_COUNTRY: 1
            });

          case 62:
            _context8.t18 = _context8.sent;
            _context8.next = 65;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Ahuachapan",
              DES_STATE: "Ahuachapán",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 65:
            _context8.t19 = _context8.sent;
            _context8.next = 68;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Cabanas",
              DES_STATE: "Cabañas",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 68:
            _context8.t20 = _context8.sent;
            _context8.next = 71;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Chalatenango",
              DES_STATE: "Chalatenango",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 71:
            _context8.t21 = _context8.sent;
            _context8.next = 74;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Cuscatlan",
              DES_STATE: "Cuscatlán",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 74:
            _context8.t22 = _context8.sent;
            _context8.next = 77;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "La Libertad",
              DES_STATE: "La Libertad",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 77:
            _context8.t23 = _context8.sent;
            _context8.next = 80;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "La Paz",
              DES_STATE: "La Paz",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 80:
            _context8.t24 = _context8.sent;
            _context8.next = 83;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "La Union",
              DES_STATE: "La Unión",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 83:
            _context8.t25 = _context8.sent;
            _context8.next = 86;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Morazan",
              DES_STATE: "Morazán",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 86:
            _context8.t26 = _context8.sent;
            _context8.next = 89;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "San Miguel",
              DES_STATE: "San Miguel",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 89:
            _context8.t27 = _context8.sent;
            _context8.next = 92;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "San Salvador",
              DES_STATE: "San Salvador",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 92:
            _context8.t28 = _context8.sent;
            _context8.next = 95;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "San Vicente",
              DES_STATE: "San Vicente",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 95:
            _context8.t29 = _context8.sent;
            _context8.next = 98;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Santa Ana",
              DES_STATE: "Santa Ana",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 98:
            _context8.t30 = _context8.sent;
            _context8.next = 101;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Sonsonate",
              DES_STATE: "Sonsonate",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 101:
            _context8.t31 = _context8.sent;
            _context8.next = 104;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Usulutan",
              DES_STATE: "Usulután",
              USR_ADD: "admin",
              COD_COUNTRY: 2
            });

          case 104:
            _context8.t32 = _context8.sent;
            _context8.next = 107;
            return _Pa_states.PA_STATES.create({
              NAM_STATE: "Florida",
              DES_STATE: "Florida",
              AREA_STATE: "32000 - 34999",
              USR_ADD: "admin",
              COD_COUNTRY: 3
            });

          case 107:
            _context8.t33 = _context8.sent;
            _context8.t34 = [_context8.t1, _context8.t2, _context8.t3, _context8.t4, _context8.t5, _context8.t6, _context8.t7, _context8.t8, _context8.t9, _context8.t10, _context8.t11, _context8.t12, _context8.t13, _context8.t14, _context8.t15, _context8.t16, _context8.t17, _context8.t18, _context8.t19, _context8.t20, _context8.t21, _context8.t22, _context8.t23, _context8.t24, _context8.t25, _context8.t26, _context8.t27, _context8.t28, _context8.t29, _context8.t30, _context8.t31, _context8.t32, _context8.t33];
            _context8.next = 111;
            return _context8.t0.all.call(_context8.t0, _context8.t34);

          case 111:
            _context8.next = 116;
            break;

          case 113:
            _context8.prev = 113;
            _context8.t35 = _context8["catch"](7);
            console.log(_context8.t35);

          case 116:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[7, 113]]);
  }));

  return function CreateStates() {
    return _ref8.apply(this, arguments);
  };
}();

exports.CreateStates = CreateStates;

var CreateCities = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var count;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _Pa_cities.PA_CITIES.count();

          case 2:
            count = _context9.sent;

            if (!(count > 0)) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt("return");

          case 7:
            _context9.prev = 7;
            _context9.t0 = Promise;
            _context9.next = 11;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "La Ceiba",
              COD_STATE: 1,
              ZIP_CODE: 504,
              POS_CODE: 31101,
              POPULATION: 449882,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "8 Municipios",
              USR_ADD: "admin"
            });

          case 11:
            _context9.t1 = _context9.sent;
            _context9.next = 14;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Trujillo",
              COD_STATE: 2,
              ZIP_CODE: 504,
              POS_CODE: 32101,
              POPULATION: 319786,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 10 Municipios",
              USR_ADD: "admin"
            });

          case 14:
            _context9.t2 = _context9.sent;
            _context9.next = 17;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Comayagua",
              COD_STATE: 3,
              ZIP_CODE: 504,
              POS_CODE: 1210,
              POPULATION: 38272,
              CURRENCY: "LPS ",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 21 Municipios ",
              USR_ADD: "admin"
            });

          case 17:
            _context9.t3 = _context9.sent;
            _context9.next = 20;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Santa Rosa de Copan",
              COD_STATE: 4,
              ZIP_CODE: 504,
              POS_CODE: 41101,
              POPULATION: 382722,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 23 Municipios",
              USR_ADD: "admin"
            });

          case 20:
            _context9.t4 = _context9.sent;
            _context9.next = 23;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "San Pedro Sula",
              COD_STATE: 5,
              ZIP_CODE: 504,
              POS_CODE: 21101,
              POPULATION: 1621762,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 12 Municipios",
              USR_ADD: "admin"
            });

          case 23:
            _context9.t5 = _context9.sent;
            _context9.next = 26;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Choluteca",
              COD_STATE: 6,
              ZIP_CODE: 504,
              POS_CODE: 51101,
              POPULATION: 447854,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 16 municipios",
              USR_ADD: "admin"
            });

          case 26:
            _context9.t6 = _context9.sent;
            _context9.next = 29;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Yuscaran",
              COD_STATE: 7,
              ZIP_CODE: 504,
              POS_CODE: 13101,
              POPULATION: 458472,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 19 Municipios",
              USR_ADD: "admin"
            });

          case 29:
            _context9.t7 = _context9.sent;
            _context9.next = 32;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Tegucigalpa",
              COD_STATE: 8,
              ZIP_CODE: 504,
              POS_CODE: 11101,
              POPULATION: 1553379,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 28 Municipios",
              USR_ADD: "admin"
            });

          case 32:
            _context9.t8 = _context9.sent;
            _context9.next = 35;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Puerto Lempira",
              COD_STATE: 9,
              ZIP_CODE: 504,
              POS_CODE: 33101,
              POPULATION: 94450,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 6 Municipios",
              USR_ADD: "admin"
            });

          case 35:
            _context9.t9 = _context9.sent;
            _context9.next = 38;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "La Esperanza",
              COD_STATE: 10,
              ZIP_CODE: 504,
              POS_CODE: 14101,
              POPULATION: 241568,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 17 Municipios",
              USR_ADD: "admin"
            });

          case 38:
            _context9.t10 = _context9.sent;
            _context9.next = 41;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "La Paz",
              COD_STATE: 11,
              ZIP_CODE: 504,
              POS_CODE: 15101,
              POPULATION: 206065,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 19 Municipios",
              USR_ADD: "admin"
            });

          case 41:
            _context9.t11 = _context9.sent;
            _context9.next = 44;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Gracias",
              COD_STATE: 12,
              ZIP_CODE: 504,
              POS_CODE: 42101,
              POPULATION: 333125,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 28 Municipios",
              USR_ADD: "admin"
            });

          case 44:
            _context9.t12 = _context9.sent;
            _context9.next = 47;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Nueva Ocotepeque",
              COD_STATE: 13,
              ZIP_CODE: 504,
              POS_CODE: 43101,
              POPULATION: 151516,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 16 Municipios",
              USR_ADD: "admin"
            });

          case 47:
            _context9.t13 = _context9.sent;
            _context9.next = 50;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Juticalpa",
              COD_STATE: 14,
              ZIP_CODE: 504,
              POS_CODE: 16101,
              POPULATION: 537306,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 23 Municipios",
              USR_ADD: "admin"
            });

          case 50:
            _context9.t14 = _context9.sent;
            _context9.next = 53;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "SantaBarbara",
              COD_STATE: 15,
              ZIP_CODE: 504,
              POS_CODE: 22101,
              POPULATION: 434896,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 23 Municipios",
              USR_ADD: "admin"
            });

          case 53:
            _context9.t15 = _context9.sent;
            _context9.next = 56;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Nacaome",
              COD_STATE: 16,
              ZIP_CODE: 504,
              POS_CODE: 52101,
              POPULATION: 185227,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 9 Municipios",
              USR_ADD: "admin"
            });

          case 56:
            _context9.t16 = _context9.sent;
            _context9.next = 59;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Yoro",
              COD_STATE: 17,
              ZIP_CODE: 504,
              POS_CODE: 53101,
              POPULATION: 613473,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 11 Municipios",
              USR_ADD: "admin"
            });

          case 59:
            _context9.t17 = _context9.sent;
            _context9.next = 62;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Roatan",
              COD_STATE: 18,
              ZIP_CODE: 504,
              POS_CODE: 34101,
              POPULATION: 65932,
              CURRENCY: "LPS",
              TIMEZONE: "-6",
              DES_CITY: "Tiene 4 Municipios",
              USR_ADD: "admin"
            });

          case 62:
            _context9.t18 = _context9.sent;
            _context9.next = 65;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Ahuachapan",
              COD_STATE: 19,
              ZIP_CODE: 503,
              POS_CODE: 2101,
              POPULATION: 319503,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Ahuachapán",
              USR_ADD: "admin"
            });

          case 65:
            _context9.t19 = _context9.sent;
            _context9.next = 68;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Sensuntepeque",
              COD_STATE: 20,
              ZIP_CODE: 503,
              POS_CODE: 1201,
              POPULATION: 149326,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Sensuntepeque",
              USR_ADD: "admin"
            });

          case 68:
            _context9.t20 = _context9.sent;
            _context9.next = 71;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Chalatenango",
              COD_STATE: 21,
              ZIP_CODE: 503,
              POS_CODE: 1301,
              POPULATION: 192788,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Chalatenango",
              USR_ADD: "admin"
            });

          case 71:
            _context9.t21 = _context9.sent;
            _context9.next = 74;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Cojutepeque",
              COD_STATE: 22,
              ZIP_CODE: 503,
              POS_CODE: 1401,
              POPULATION: 231480,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Cojutepeque",
              USR_ADD: "admin"
            });

          case 74:
            _context9.t22 = _context9.sent;
            _context9.next = 77;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Santa Tecla",
              COD_STATE: 23,
              ZIP_CODE: 503,
              POS_CODE: 1501,
              POPULATION: 660652,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Santa Tecla",
              USR_ADD: "admin"
            });

          case 77:
            _context9.t23 = _context9.sent;
            _context9.next = 80;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Zacatecoluca",
              COD_STATE: 24,
              ZIP_CODE: 503,
              POS_CODE: 1601,
              POPULATION: 308087,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Zacatecoluca",
              USR_ADD: "admin"
            });

          case 80:
            _context9.t24 = _context9.sent;
            _context9.next = 83;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "La Union",
              COD_STATE: 25,
              ZIP_CODE: 503,
              POS_CODE: 3101,
              POPULATION: 238217,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "La Unión",
              USR_ADD: "admin"
            });

          case 83:
            _context9.t25 = _context9.sent;
            _context9.next = 86;
            return _Pa_cities.PA_CITIES.create({
              COD_STATE: 26,
              NAM_CITY: "San Francisco",
              ZIP_CODE: 503,
              POPULATION: 174426,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "San Francisco",
              USR_ADD: "admin"
            });

          case 86:
            _context9.t26 = _context9.sent;
            _context9.next = 89;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "San Miguel",
              COD_STATE: 27,
              ZIP_CODE: 503,
              POS_CODE: 3301,
              POPULATION: 434003,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "San Miguel",
              USR_ADD: "admin"
            });

          case 89:
            _context9.t27 = _context9.sent;
            _context9.next = 92;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "San Salvador",
              COD_STATE: 28,
              ZIP_CODE: 503,
              POS_CODE: 1101,
              POPULATION: 1567156,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "San Salvador",
              USR_ADD: "admin"
            });

          case 92:
            _context9.t28 = _context9.sent;
            _context9.next = 95;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "San Vicente",
              COD_STATE: 29,
              ZIP_CODE: 503,
              POS_CODE: 1701,
              POPULATION: 161645,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "San Vicente",
              USR_ADD: "admin"
            });

          case 95:
            _context9.t29 = _context9.sent;
            _context9.next = 98;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Santa Ana",
              COD_STATE: 30,
              ZIP_CODE: 503,
              POS_CODE: 2201,
              POPULATION: 523655,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Santa Ana",
              USR_ADD: "admin"
            });

          case 98:
            _context9.t30 = _context9.sent;
            _context9.next = 101;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Sonsonate",
              COD_STATE: 31,
              ZIP_CODE: 503,
              POS_CODE: 2301,
              POPULATION: 438960,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Sonsonate",
              USR_ADD: "admin"
            });

          case 101:
            _context9.t31 = _context9.sent;
            _context9.next = 104;
            return _Pa_cities.PA_CITIES.create({
              NAM_CITY: "Usulutan",
              COD_STATE: 32,
              ZIP_CODE: 302,
              POS_CODE: 3401,
              POPULATION: 344235,
              CURRENCY: "$",
              TIMEZONE: "UTC-06:00",
              DES_CITY: "Usulután",
              USR_ADD: "admin"
            });

          case 104:
            _context9.t32 = _context9.sent;
            _context9.t33 = [_context9.t1, _context9.t2, _context9.t3, _context9.t4, _context9.t5, _context9.t6, _context9.t7, _context9.t8, _context9.t9, _context9.t10, _context9.t11, _context9.t12, _context9.t13, _context9.t14, _context9.t15, _context9.t16, _context9.t17, _context9.t18, _context9.t19, _context9.t20, _context9.t21, _context9.t22, _context9.t23, _context9.t24, _context9.t25, _context9.t26, _context9.t27, _context9.t28, _context9.t29, _context9.t30, _context9.t31, _context9.t32];
            _context9.next = 108;
            return _context9.t0.all.call(_context9.t0, _context9.t33);

          case 108:
            _context9.next = 113;
            break;

          case 110:
            _context9.prev = 110;
            _context9.t34 = _context9["catch"](7);
            console.log(_context9.t34);

          case 113:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[7, 110]]);
  }));

  return function CreateCities() {
    return _ref9.apply(this, arguments);
  };
}();

exports.CreateCities = CreateCities;

var CreateSeguri = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var count;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _Se_seguridad.SE_SEGURIDAD.count();

          case 2:
            count = _context10.sent;

            if (!(count > 0)) {
              _context10.next = 7;
              break;
            }

            return _context10.abrupt("return");

          case 7:
            _context10.prev = 7;
            _context10.next = 10;
            return Promise.all([_Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "tiempo de token",
              DATO_SEGURIDAD: "7200",
              DES_SEGURIDAD: "Tiempo de reset token"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "tiempo de reset password token",
              DATO_SEGURIDAD: "7200",
              DES_SEGURIDAD: "Tiempo de reset token para password"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "Nombre del usuario",
              DATO_SEGURIDAD: "info@jetcargo.vip",
              DES_SEGURIDAD: "Tiempo de reset token para password"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "Servidor entrante",
              DATO_SEGURIDAD: "mail.jetcargo.vip",
              DES_SEGURIDAD: "Direccion de entrada del servidor"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "Servidor entrante IMAP PORT",
              DATO_SEGURIDAD: "993",
              DES_SEGURIDAD: "Puerto de entrada IMAP al servidor"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "Servidor entrante POP3 PORT",
              DATO_SEGURIDAD: "995",
              DES_SEGURIDAD: "Puerto de entrada POP3 al servidor"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "Servidor de correo",
              DATO_SEGURIDAD: "mail.jetcargo.vip",
              DES_SEGURIDAD: "ireccion de entrada del correo"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "Servidor entrante SMTP PORT",
              DATO_SEGURIDAD: "465",
              DES_SEGURIDAD: "Puerto de entrada SMPT al servidor"
            }), _Se_seguridad.SE_SEGURIDAD.create({
              NAM_SEGURIDAD: "Tasa de cambio del dolar",
              DATO_SEGURIDAD: "24.6677",
              DES_SEGURIDAD: "Tasa de cambio de dolares a lempiras"
            })]);

          case 10:
            _context10.next = 15;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](7);
            console.log(_context10.t0);

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[7, 12]]);
  }));

  return function CreateSeguri() {
    return _ref10.apply(this, arguments);
  };
}();

exports.CreateSeguri = CreateSeguri;

var CreateUser = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var count;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _Users.USERS.count();

          case 2:
            count = _context11.sent;

            if (!(count > 0)) {
              _context11.next = 7;
              break;
            }

            return _context11.abrupt("return");

          case 7:
            _context11.prev = 7;
            _context11.next = 10;
            return Promise.all([_Pa_people.PA_POEPLE.create({
              ID: "08011999813042",
              TIP_DOCUMENT: "PASSPORT",
              FRISTNAME: "Alejandro",
              MIDDLENAME: "Luis",
              LASTNAME: "Gonzalez",
              AGE: 20,
              DAT_BIRTH: "1999-01-01",
              TIP_PERSON: "N",
              USR_ADD: "admin"
            }), _Users.USERS.create({
              COD_PEOPLE: 1,
              PROFILE_PHOTO_PATH: null,
              EMAIL: "lairias@unah.hn",
              EMAIL_VERIFIED: true,
              PAS_USER: "$2b$10$OMXC9dSjkSaNyF4PjQzPJObvw/SWnKlXCb7s2hlBzHhzTkk.gQzgm",
              IND_USR: true,
              IND_INS: true,
              USR_ADD: "admin"
            }), _MODEL_has_typeUser.MODEL_HAS_ROLES.create({
              COD_TYPEUSERS: 1,
              COD_USER: 1
            }), _Pa_customes.PA_CUSTOMES.create({
              COD_USER: 1,
              USR_ADD: "admin"
            })]);

          case 10:
            _context11.next = 15;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](7);
            console.log(_context11.t0);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[7, 12]]);
  }));

  return function CreateUser() {
    return _ref11.apply(this, arguments);
  };
}();

exports.CreateUser = CreateUser;

var CreateCatPackage = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var count;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return _BO_catPackage.BO_CATPACKAGE.count();

          case 2:
            count = _context12.sent;

            if (!(count > 0)) {
              _context12.next = 7;
              break;
            }

            return _context12.abrupt("return");

          case 7:
            _context12.prev = 7;
            _context12.next = 10;
            return Promise.all([_BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Accesorios Personales Reloj de puño Hombre y Mujer",
              DES_CATPACKAGE: "1",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Accesorios Personales Anillos y cadenas de oro,aritos",
              DES_CATPACKAGE: "2",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Accesorios Personales Anillos y cadenas de plata,aritos",
              DES_CATPACKAGE: "3",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Accesorios Personales Cadenas, Dijes, Anillos, Aritos ( Bisutería / Enchapado",
              DES_CATPACKAGE: "4",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Accesorio Para Celulares Cobertor, Fundas, Estuches.",
              DES_CATPACKAGE: "5",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Accesorios Personales Fajas",
              DES_CATPACKAGE: "6",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Articulos Varios Bolsones, Bolsos, Carteras, Maletas, Maletines.",
              DES_CATPACKAGE: "7",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Articulos de Fiesta Mascaras, Disfraces, etc.",
              DES_CATPACKAGE: "8",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Articulos de Navidad Articulos de Navidad",
              DES_CATPACKAGE: "9",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Bicicleta / Motocicleta Pedales, Manubrios, Horquillas, Loderas, Asientos",
              DES_CATPACKAGE: "10",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Computadora Monitores LCD p/ computadoras",
              DES_CATPACKAGE: "11",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Computadora MotherBoard,discos duro interno,externo,tarjetas de sonido",
              DES_CATPACKAGE: "12",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Computadora Mouse, Teclado",
              DES_CATPACKAGE: "13",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Computadora Tablet,Ipad,Laptop,y comp. de escritorio",
              DES_CATPACKAGE: "14",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Computadora Router,Switch(tambien los extenda),lector de memoria Usb",
              DES_CATPACKAGE: "15",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Herramientas para Manicura Herramientas para manicura",
              DES_CATPACKAGE: "16",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Herramientas Manuales formones,sierras manuales,martillos,desarmadores",
              DES_CATPACKAGE: "17",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Herramientas Taladros,sierras,martillos electrivos",
              DES_CATPACKAGE: "17",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Alfombras plasticas,caucho o material textil para carros o casa",
              DES_CATPACKAGE: "18",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Adornos de metal,madera,yeso,bronce,plastico etc",
              DES_CATPACKAGE: "19",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Adornos de ceramica(porcelana)",
              DES_CATPACKAGE: "20",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Sillas,asientos,muebles",
              DES_CATPACKAGE: "21",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Coches y sillas para el transporte de niños",
              DES_CATPACKAGE: "22",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar CD Musica,Audio",
              DES_CATPACKAGE: "23",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Videos,peliculas",
              DES_CATPACKAGE: "24",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Video Juegos,Consola de video Juego,controles para video juego",
              DES_CATPACKAGE: "25",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Cuadros",
              DES_CATPACKAGE: "26",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar DVD Player",
              DES_CATPACKAGE: "27",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Equipos de sonido",
              DES_CATPACKAGE: "28",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Camaras digitales,video camaras",
              DES_CATPACKAGE: "29",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Camaras fotograficas,video camaras",
              DES_CATPACKAGE: "30",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Camaras de seguridad",
              DES_CATPACKAGE: "31",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Camaras de video",
              DES_CATPACKAGE: "32",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Lamparas de mesa o sala",
              DES_CATPACKAGE: "33",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Lamparas de cocina",
              DES_CATPACKAGE: "34",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Lamparas de dormitorio",
              DES_CATPACKAGE: "35",
              USR_ADD: "admin"
            }), _BO_catPackage.BO_CATPACKAGE.create({
              NAM_CATPACKAGE: "Hogar Lamparas de comedor",
              DES_CATPACKAGE: "36",
              USR_ADD: "admin"
            })]);

          case 10:
            _context12.next = 15;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](7);
            console.log(_context12.t0);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[7, 12]]);
  }));

  return function CreateCatPackage() {
    return _ref12.apply(this, arguments);
  };
}();

exports.CreateCatPackage = CreateCatPackage;

var CreateTypePackage = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var count;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _BO_typePackage.BO_TYPEPACKAGE.count();

          case 2:
            count = _context13.sent;

            if (!(count > 0)) {
              _context13.next = 7;
              break;
            }

            return _context13.abrupt("return");

          case 7:
            _context13.prev = 7;
            _context13.next = 10;
            return Promise.all([_BO_typePackage.BO_TYPEPACKAGE.create({
              NAM_TYPEPACKAGE: "Envió en Aéreo",
              DES_TYPEPACKAGE: "Entrega en 3 semanas, mayor a 30 libras",
              PREC_TYPEPACKAGE: "4",
              USR_ADD: "admin"
            }), _BO_typePackage.BO_TYPEPACKAGE.create({
              NAM_TYPEPACKAGE: "Envió en Marítimo",
              DES_TYPEPACKAGE: "Entrega en 2 semanas",
              PREC_TYPEPACKAGE: "6",
              USR_ADD: "admin"
            }), _BO_typePackage.BO_TYPEPACKAGE.create({
              NAM_TYPEPACKAGE: "Envió en Express",
              DES_TYPEPACKAGE: "Entrega en 4 días, salida los jueves entregando los martes",
              PREC_TYPEPACKAGE: "10",
              USR_ADD: "admin"
            })]);

          case 10:
            _context13.next = 15;
            break;

          case 12:
            _context13.prev = 12;
            _context13.t0 = _context13["catch"](7);
            console.log(_context13.t0);

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[7, 12]]);
  }));

  return function CreateTypePackage() {
    return _ref13.apply(this, arguments);
  };
}();

exports.CreateTypePackage = CreateTypePackage;

var CreateService = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    var count;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return _DE_service.DE_SERVICE.count();

          case 2:
            count = _context14.sent;

            if (!(count > 0)) {
              _context14.next = 7;
              break;
            }

            return _context14.abrupt("return");

          case 7:
            _context14.prev = 7;
            _context14.next = 10;
            return Promise.all([_DE_service.DE_SERVICE.create({
              SERVICE_NAME: "Amazon",
              SERVICE_CODE: "amazon",
              SERVICE_PHONE: null,
              SERVICE_URL: "https://track.amazon.in/tracking",
              SERVICE_LOGO: "//s.trackingmore.com/images/icons/express/amazon-in.png"
            }), _DE_service.DE_SERVICE.create({
              SERVICE_NAME: "DHL Express",
              SERVICE_CODE: "dhl",
              SERVICE_PHONE: null,
              SERVICE_URL: "http://www.dhl.com",
              SERVICE_LOGO: "//s.trackingmore.com/images/icons/express/dhl.png"
            }), _DE_service.DE_SERVICE.create({
              SERVICE_NAME: "UPS",
              SERVICE_CODE: "ups",
              SERVICE_PHONE: "+1 800 742 5877",
              SERVICE_URL: "https://www.ups.com/",
              SERVICE_LOGO: "//s.trackingmore.com/images/icons/express/ups.png"
            }), _DE_service.DE_SERVICE.create({
              SERVICE_NAME: "Fedex",
              SERVICE_CODE: "fedex",
              SERVICE_PHONE: "+1 800 247 4747",
              SERVICE_URL: "https://www.fedex.com",
              SERVICE_LOGO: "//s.trackingmore.com/images/icons/express/fedex.png"
            }), _DE_service.DE_SERVICE.create({
              SERVICE_NAME: "TNT",
              SERVICE_CODE: "tnt",
              SERVICE_PHONE: null,
              SERVICE_URL: "http://www.tnt.com/",
              SERVICE_LOGO: "//s.trackingmore.com/images/icons/express/tnt.png"
            }), _DE_service.DE_SERVICE.create({
              SERVICE_NAME: "DHL Poland Domestic",
              SERVICE_CODE: "dhl-poland",
              SERVICE_PHONE: null,
              SERVICE_URL: "https://www.logistics.dhl",
              SERVICE_LOGO: "//s.trackingmore.com/images/icons/express/dhl-es.png"
            }), _DE_service.DE_SERVICE.create({
              SERVICE_NAME: "Mexico Post",
              SERVICE_CODE: "correos-mexico",
              SERVICE_PHONE: "(55) 5340 3300",
              SERVICE_URL: "http://www.tnt.com/",
              SERVICE_LOGO: "//s.trackingmore.com/images/icons/express/tnt.png"
            })]);

          case 10:
            _context14.next = 15;
            break;

          case 12:
            _context14.prev = 12;
            _context14.t0 = _context14["catch"](7);
            console.log(_context14.t0);

          case 15:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[7, 12]]);
  }));

  return function CreateService() {
    return _ref14.apply(this, arguments);
  };
}();

exports.CreateService = CreateService;

var CreateLocker = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
    var count;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return _BO_locker.BO_LOCKER.count();

          case 2:
            count = _context15.sent;

            if (!(count > 0)) {
              _context15.next = 7;
              break;
            }

            return _context15.abrupt("return");

          case 7:
            _context15.prev = 7;
            _context15.next = 10;
            return Promise.all([_BO_locker.BO_LOCKER.create({
              COD_PEOPLE: 1,
              NUM_LOCKER: "TGU-00145",
              TYP_LOCKER: "8109 NW 60TH ST",
              ADDRES_LOCKER: "Miami, FL 33166",
              TEL_LOCKER: "6319133067",
              USR_ADD: "admin"
            }), _Pa_phones.PA_PHONES.create({
              NUM_AREA: "305",
              NUM_PHONE: "8109"
            }), _REL_locker_phone.REL_LOCKER_PHONE.create({
              COD_LOCKER: 1,
              COD_PHONE: 1
            })]);

          case 10:
            _context15.next = 15;
            break;

          case 12:
            _context15.prev = 12;
            _context15.t0 = _context15["catch"](7);
            console.log(_context15.t0);

          case 15:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[7, 12]]);
  }));

  return function CreateLocker() {
    return _ref15.apply(this, arguments);
  };
}();

exports.CreateLocker = CreateLocker;
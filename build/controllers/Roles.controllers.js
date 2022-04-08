"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/Pa_typeUsers"),
    PA_TypeUsers = _require.PA_TypeUsers;

var _require2 = require("../helpers/handleError"),
    HttpError = _require2.HttpError;

var _require3 = require("../models/relations/typeusers_has_permisos"),
    MODEL_TYPEUSER_HAS_PERMISOS = _require3.MODEL_TYPEUSER_HAS_PERMISOS;

var sequelize = require("../config/database");

var _require4 = require("./helpers/Roles.Helpers"),
    RolesForeachPermiso = _require4.RolesForeachPermiso,
    RolesForeachAllPermiso = _require4.RolesForeachAllPermiso;

exports.GetRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_TYPEUSERS, role, permisos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_TYPEUSERS = req.params.COD_TYPEUSERS;
            _context.prev = 1;
            _context.next = 4;
            return PA_TypeUsers.findByPk(COD_TYPEUSERS);

          case 4:
            role = _context.sent;
            _context.next = 7;
            return sequelize.query("CALL SHOW_PERMISOS_TYPEUSER(".concat(COD_TYPEUSERS, ") "));

          case 7:
            permisos = _context.sent;
            res.status(200).json({
              ok: true,
              role: role,
              permisos: permisos
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetRoles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var role;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return sequelize.query("CALL COUNT_TYPE_USERS_ALL_PERMISOS()");

          case 3:
            role = _context2.sent;

            if (role) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              ok: false,
              message: "No hay roles"
            }));

          case 6:
            res.status(200).json({
              ok: true,
              role: role
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            HttpError(res, _context2.t0);
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.UpdateRole = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var COD_TYPEUSERS, _req$body, NOM_TYPE, DES_TYPE, USR_UPD, PERMISSION, TODO;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            COD_TYPEUSERS = req.params.COD_TYPEUSERS;
            _req$body = req.body, NOM_TYPE = _req$body.NOM_TYPE, DES_TYPE = _req$body.DES_TYPE, USR_UPD = _req$body.USR_UPD, PERMISSION = _req$body.PERMISSION, TODO = _req$body.TODO;
            _context3.prev = 2;
            _context3.next = 5;
            return PA_TypeUsers.update({
              NOM_TYPE: NOM_TYPE,
              DES_TYPE: DES_TYPE,
              USR_UPD: USR_UPD
            }, {
              where: {
                COD_TYPEUSERS: COD_TYPEUSERS
              }
            });

          case 5:
            _context3.next = 7;
            return MODEL_TYPEUSER_HAS_PERMISOS.destroy({
              where: {
                COD_TYPEUSERS: COD_TYPEUSERS
              }
            });

          case 7:
            if (!TODO) {
              _context3.next = 12;
              break;
            }

            RolesForeachAllPermiso(COD_TYPEUSERS);
            return _context3.abrupt("return", res.sendStatus(200));

          case 12:
            RolesForeachPermiso(PERMISSION, COD_TYPEUSERS);
            return _context3.abrupt("return", res.sendStatus(200));

          case 14:
            _context3.next = 21;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            HttpError(res, _context3.t0);
            next();

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 16]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.DeleteRole = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var COD_TYPEUSERS;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            COD_TYPEUSERS = req.params.COD_TYPEUSERS;
            _context4.prev = 1;
            _context4.next = 4;
            return PA_TypeUsers.destroy({
              where: {
                COD_TYPEUSERS: COD_TYPEUSERS
              }
            });

          case 4:
            return _context4.abrupt("return", res.sendStatus(200));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            HttpError(res, _context4.t0);
            next();

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.CreateRole = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body2, NOM_TYPE, DES_TYPE, USR_ADD, PERMISSION, TODO, role;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, NOM_TYPE = _req$body2.NOM_TYPE, DES_TYPE = _req$body2.DES_TYPE, USR_ADD = _req$body2.USR_ADD, PERMISSION = _req$body2.PERMISSION, TODO = _req$body2.TODO;
            _context5.prev = 1;
            _context5.next = 4;
            return PA_TypeUsers.create({
              NOM_TYPE: NOM_TYPE,
              DES_TYPE: DES_TYPE,
              USR_ADD: USR_ADD
            });

          case 4:
            role = _context5.sent;

            if (!TODO) {
              _context5.next = 10;
              break;
            }

            RolesForeachAllPermiso(role.COD_TYPEUSERS);
            return _context5.abrupt("return", res.sendStatus(200));

          case 10:
            RolesForeachPermiso(PERMISSION, role.COD_TYPEUSERS);
            return _context5.abrupt("return", res.sendStatus(200));

          case 12:
            _context5.next = 18;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](1);
            HttpError(res, _context5.t0);
            next();

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 14]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
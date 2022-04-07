"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolesForeachPermiso = exports.RolesForeachAllPermiso = void 0;

var _typeusers_has_permisos = require("../../models/relations/typeusers_has_permisos");

var _SE_permisos = require("../../models/security/SE_permisos");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var RolesForeachPermiso = function RolesForeachPermiso(PERMISSION, COD_TYPEUSERS) {
  try {
    PERMISSION.forEach( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(element) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS.create({
                  COD_PERMISO: element,
                  COD_TYPEUSERS: COD_TYPEUSERS
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  } catch (error) {
    console.log(error);
    return;
  }
};

exports.RolesForeachPermiso = RolesForeachPermiso;

var RolesForeachAllPermiso = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(COD_TYPEUSERS) {
    var allPermisos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _SE_permisos.SE_PERMISOS.findAll();

          case 3:
            allPermisos = _context3.sent;
            allPermisos.forEach( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(element) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _typeusers_has_permisos.MODEL_TYPEUSER_HAS_PERMISOS.create({
                          COD_PERMISO: element.COD_PERMISO,
                          COD_TYPEUSERS: COD_TYPEUSERS
                        });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return");

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function RolesForeachAllPermiso(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.RolesForeachAllPermiso = RolesForeachAllPermiso;
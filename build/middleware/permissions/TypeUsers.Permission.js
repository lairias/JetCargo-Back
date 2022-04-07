"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeUserView = exports.TypeUserUpdate = exports.TypeUserDelete = exports.TypeUserCreate = void 0;

var _database = _interopRequireDefault(require("../../config/database"));

var _handleError = require("../../helpers/handleError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TypeUserView = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var permiso;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _database["default"].query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)", {
              replacements: {
                COD_USER: req.userId,
                NAM_PERMISO: "typeuser.view"
              }
            });

          case 3:
            permiso = _context.sent;

            if (JSON.stringify(permiso[0])) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: "Acceso no Autorizado"
            }));

          case 6:
            next();
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function TypeUserView(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.TypeUserView = TypeUserView;

var TypeUserCreate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var permiso;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _database["default"].query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)", {
              replacements: {
                COD_USER: req.userId,
                NAM_PERMISO: "typeuser.crear"
              }
            });

          case 3:
            permiso = _context2.sent;

            if (JSON.stringify(permiso[0])) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(403).json({
              message: "Acceso no Autorizado"
            }));

          case 6:
            next();
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            (0, _handleError.HttpError)(res, _context2.t0);
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function TypeUserCreate(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.TypeUserCreate = TypeUserCreate;

var TypeUserUpdate = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var permiso;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _database["default"].query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)", {
              replacements: {
                COD_USER: req.userId,
                NAM_PERMISO: "typeuser.update"
              }
            });

          case 3:
            permiso = _context3.sent;

            if (JSON.stringify(permiso[0])) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(403).json({
              message: "Acceso no Autorizado"
            }));

          case 6:
            next();
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function TypeUserUpdate(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.TypeUserUpdate = TypeUserUpdate;

var TypeUserDelete = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var permiso;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _database["default"].query("CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)", {
              replacements: {
                COD_USER: req.userId,
                NAM_PERMISO: "typeuser.delete"
              }
            });

          case 3:
            permiso = _context4.sent;

            if (JSON.stringify(permiso[0])) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(403).json({
              message: "Acceso no Autorizado"
            }));

          case 6:
            next();
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            (0, _handleError.HttpError)(res, _context4.t0);
            next();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function TypeUserDelete(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.TypeUserDelete = TypeUserDelete;
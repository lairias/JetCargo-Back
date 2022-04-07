"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddresView = exports.AddresUpdate = exports.AddresDelete = exports.AddresCreate = void 0;

var _database = _interopRequireDefault(require("../../config/database"));

var _handleError = require("../../helpers/handleError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AddresView = /*#__PURE__*/function () {
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
                NAM_PERMISO: "addres.view"
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

  return function AddresView(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.AddresView = AddresView;

var AddresCreate = /*#__PURE__*/function () {
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
                NAM_PERMISO: "addres.crear"
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

  return function AddresCreate(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.AddresCreate = AddresCreate;

var AddresUpdate = /*#__PURE__*/function () {
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
                NAM_PERMISO: "addres.update"
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

  return function AddresUpdate(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.AddresUpdate = AddresUpdate;

var AddresDelete = /*#__PURE__*/function () {
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
                NAM_PERMISO: "addres.delete"
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

  return function AddresDelete(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.AddresDelete = AddresDelete;
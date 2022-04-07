"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyTokenPass = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Users = require("../models/Users");

require("dotenv/config");

var _handleError = require("../helpers/handleError");

var _verifyToken = require("./tokens/verifyToken.Date");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyTokenPass = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var TOKEN, _jwt$verify, id, lock;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            TOKEN = req.params.TOKEN;
            _context.prev = 1;

            if ((0, _verifyToken.verifyTokenDate)(TOKEN)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(202).json({
              message: "Tiempo de recuperación de contraseña caducado. Intenta de nuevo"
            }));

          case 4:
            _jwt$verify = _jsonwebtoken["default"].verify(TOKEN, process.env.JWTSECRETPASSWORD), id = _jwt$verify.id;
            _context.next = 7;
            return _Users.USERS.findByPk(id);

          case 7:
            lock = _context.sent;
            req.userIdR = id;

            if (lock) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(202).json({
              message: "no user found"
            }));

          case 11:
            if (lock.IND_USR) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(202).json({
              message: "no user no activo"
            }));

          case 13:
            next();
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 16]]);
  }));

  return function verifyTokenPass(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyTokenPass = verifyTokenPass;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singUp = exports.singIn = void 0;

var _Users = require("../models/Users");

var _middleware = _interopRequireDefault(require("../middleware"));

var _config = _interopRequireDefault(require("../config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var singUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, EMAIL, PAS_USER, User, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, EMAIL = _req$body.EMAIL, PAS_USER = _req$body.PAS_USER;
            _context.t0 = _Users.USERS;
            _context.t1 = EMAIL;
            _context.next = 6;
            return _middleware["default"].encrptPassword(PAS_USER);

          case 6:
            _context.t2 = _context.sent;
            _context.t3 = {
              EMAIL: _context.t1,
              PAS_USER: _context.t2,
              USR_ADD: "admin"
            };
            _context.next = 10;
            return _context.t0.create.call(_context.t0, _context.t3);

          case 10:
            User = _context.sent;
            _context.next = 13;
            return _jsonwebtoken["default"].sign({
              id: User.COD_USER
            }, _config["default"].JwrSecret, {
              expiresIn: 86400
            });

          case 13:
            token = _context.sent;

            _Users.USERS.update({
              API_TOKEN: token
            }, {
              where: {
                COD_USER: User.COD_USER
              }
            });

            res.status(201).json({
              token: token
            });
            _context.next = 23;
            break;

          case 18:
            _context.prev = 18;
            _context.t4 = _context["catch"](0);
            res.status(501).json({
              message: "Error al momento de procesar la peticion "
            });
            console.log(_context.t4);
            next();

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function singUp(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.singUp = singUp;

var singIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$body2, EMAIL, PAS_USER, UserFond, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, EMAIL = _req$body2.EMAIL, PAS_USER = _req$body2.PAS_USER;
            console.log(req.headers["x-access-token"]);
            _context2.prev = 2;
            _context2.next = 5;
            return _Users.USERS.findOne({
              where: {
                EMAIL: EMAIL
              }
            });

          case 5:
            UserFond = _context2.sent;

            if (UserFond) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Pass o User invalidos"
            }));

          case 8:
            _context2.next = 10;
            return _middleware["default"].compararPassword(PAS_USER, UserFond.PAS_USER);

          case 10:
            if (_context2.sent) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Pass o User invalidos"
            }));

          case 12:
            token = _jsonwebtoken["default"].sign({
              id: UserFond.COD_USER
            }, _config["default"].JwrSecret, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });
            _context2.next = 21;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](2);
            res.status(501).json({
              message: "Error al momento de procesar la peticion "
            });
            console.log(_context2.t0);
            next();

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 16]]);
  }));

  return function singIn(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.singIn = singIn;
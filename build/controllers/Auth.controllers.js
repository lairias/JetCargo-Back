"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singUp = exports.singIn = void 0;

var _BO_locker = _interopRequireDefault(require("../models/BO_locker"));

var _middleware = _interopRequireDefault(require("../middleware"));

var _config = _interopRequireDefault(require("../config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var singUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, NAME_LOCKER, CLAVE, Locker, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, NAME_LOCKER = _req$body.NAME_LOCKER, CLAVE = _req$body.CLAVE;
            _context.t0 = _BO_locker["default"];
            _context.t1 = NAME_LOCKER;
            _context.next = 6;
            return _middleware["default"].encrptPassword(CLAVE);

          case 6:
            _context.t2 = _context.sent;
            _context.t3 = {
              NAME_LOCKER: _context.t1,
              CLAVE: _context.t2,
              USR_ADD: "admin"
            };
            _context.next = 10;
            return _context.t0.create.call(_context.t0, _context.t3);

          case 10:
            Locker = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: Locker.COD_USER
            }, _config["default"].JwrSecret, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t4 = _context["catch"](0);
            console.log(_context.t4);
            next();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function singUp(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.singUp = singUp;

var singIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, NAME_LOCKER, CLAVE, UserFond, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, NAME_LOCKER = _req$body2.NAME_LOCKER, CLAVE = _req$body2.CLAVE;
            _context2.prev = 1;
            _context2.next = 4;
            return _BO_locker["default"].findOne({
              where: {
                NAME_LOCKER: NAME_LOCKER
              }
            });

          case 4:
            UserFond = _context2.sent;

            if (UserFond) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              token: null,
              message: "Pass o User invalidos"
            }));

          case 7:
            _context2.next = 9;
            return _middleware["default"].compararPassword(CLAVE, UserFond.CLAVE);

          case 9:
            if (_context2.sent) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              token: null,
              message: "Pass o User invalidos"
            }));

          case 11:
            console.log(UserFond);
            token = _jsonwebtoken["default"].sign({
              id: UserFond.COD_USER
            }, _config["default"].JwrSecret, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            next();

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 16]]);
  }));

  return function singIn(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.singIn = singIn;
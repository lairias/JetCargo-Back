"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/Users"),
    USERS = _require.USERS;

var _require2 = require("sequelize"),
    Op = _require2.Op;

var _require3 = require("../helpers/handleError"),
    HttpError = _require3.HttpError;

exports.VeryEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$params, EMAIL, TOKEN, COD_USER, User;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, EMAIL = _req$params.EMAIL, TOKEN = _req$params.TOKEN, COD_USER = _req$params.COD_USER;
            _context.prev = 1;
            _context.next = 4;
            return USERS.findOne({
              where: {
                EMAIL: EMAIL
              }
            });

          case 4:
            User = _context.sent;

            if (User) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Usuario no encontrado"
            }));

          case 7:
            _context.next = 9;
            return USERS.update({
              API_TOKEN: null,
              IND_USR: 1,
              EMAIL_VERIFIED: 1
            }, {
              where: _defineProperty({
                API_TOKEN: TOKEN
              }, Op.and, [{
                EMAIL: EMAIL
              }, {
                COD_USER: COD_USER
              }])
            });

          case 9:
            return _context.abrupt("return", res.redirect("".concat(process.env.API_FROND, ":").concat(process.env.PORT_FROND, "/very/email/")));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            HttpError(res, _context.t0);
            next();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetEmail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var EMAIL, User;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            EMAIL = req.params.EMAIL;
            _context2.prev = 1;
            _context2.next = 4;
            return USERS.findByPk(EMAIL);

          case 4:
            User = _context2.sent;

            if (User) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              message: "Correo electrónico no encontrado",
              found: null
            }));

          case 7:
            return _context2.abrupt("return", res.status(200).json({
              found: true
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            HttpError(res, _context2.t0);
            next();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
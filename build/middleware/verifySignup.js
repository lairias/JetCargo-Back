"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var jwt = require("jsonwebtoken");

var USERS = require("../models/Users");

require('dotenv').config();

var _require = require("../helpers/handleError"),
    HttpError = _require.HttpError;

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, _jwt$verify, id;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: "No token provided"
            }));

          case 4:
            _jwt$verify = jwt.verify(token, process.env.JWTSECRET), id = _jwt$verify.id;
            req.userId = id;
            next();
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            HttpError(res, _context.t0);
            next();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var verifyIndUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var User;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (req.userId) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              message: "Token no valido"
            }));

          case 3:
            _context2.next = 5;
            return USERS.findByPk(req.userId);

          case 5:
            User = _context2.sent;

            if (User) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              message: "no user found"
            }));

          case 8:
            if (User.IND_USR) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              message: "no user no activo"
            }));

          case 10:
            next();
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            HttpError(res, _context2.t0);
            next();

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function verifyIndUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  verifyToken: verifyToken,
  verifyIndUser: verifyIndUser
};
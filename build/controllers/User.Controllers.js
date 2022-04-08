"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
var _require = require("../models/Users"),
    USERS = _require.USERS;

var _require2 = require("../helpers/handleError"),
    HttpError = _require2.HttpError;

var _require3 = require("../email"),
    transport = _require3.transport,
    configTransportVery = _require3.configTransportVery;

var _require4 = require("../helpers/bcrypt"),
    encrptPassword = _require4.encrptPassword,
    compararPassword = _require4.compararPassword;

var sequelize = require("../config/database");

var jwt = require("jsonwebtoken");

require('dotenv').config();

exports.UpdateUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, PROFILE_PHOTO_PATH, EMAIL, COD_USER;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, PROFILE_PHOTO_PATH = _req$body.PROFILE_PHOTO_PATH, EMAIL = _req$body.EMAIL;
            COD_USER = req.params.COD_USER;
            _context.prev = 2;
            _context.next = 5;
            return sequelize.query("CALL UPD_USER()", {
              replacements: {
                COD_USER: COD_USER
              }
            });

          case 5:
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            HttpError(res, _context.t0);
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
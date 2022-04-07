"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUser = void 0;

var _Users = require("../models/Users");

var _handleError = require("../helpers/handleError");

var _email = require("../email");

var _bcrypt = require("../helpers/bcrypt");

var _database = _interopRequireDefault(require("../config/database"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UpdateUser = /*#__PURE__*/function () {
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
            return _database["default"].query("CALL UPD_USER()", {
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
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));

  return function UpdateUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.UpdateUser = UpdateUser;
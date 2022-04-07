"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singUp = exports.singIn = exports.RevalidarToken = void 0;

var _Users = require("../models/Users");

var _Pa_people = require("../models/Pa_people");

var _handleError = require("../helpers/handleError");

var _email = require("../email");

var _bcrypt = require("../helpers/bcrypt");

var _database = _interopRequireDefault(require("../config/database"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

var _Pa_customes = require("../models/Pa_customes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var singUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, ID, TIP_DOCUMENT, FRISTNAME, MIDDLENAME, LASTNAME, AGE, EMAIL, PAS_USER, ROL, DAT_BIRTH, COD_COUNTRY, COD_STATE, COD_CITY, DES_ADDRESS, NUM_AREA, NUM_PHONE, USR_ADD, User, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, ID = _req$body.ID, TIP_DOCUMENT = _req$body.TIP_DOCUMENT, FRISTNAME = _req$body.FRISTNAME, MIDDLENAME = _req$body.MIDDLENAME, LASTNAME = _req$body.LASTNAME, AGE = _req$body.AGE, EMAIL = _req$body.EMAIL, PAS_USER = _req$body.PAS_USER, ROL = _req$body.ROL, DAT_BIRTH = _req$body.DAT_BIRTH, COD_COUNTRY = _req$body.COD_COUNTRY, COD_STATE = _req$body.COD_STATE, COD_CITY = _req$body.COD_CITY, DES_ADDRESS = _req$body.DES_ADDRESS, NUM_AREA = _req$body.NUM_AREA, NUM_PHONE = _req$body.NUM_PHONE, USR_ADD = _req$body.USR_ADD;
            _context.t0 = _database["default"];
            _context.t1 = ID;
            _context.t2 = TIP_DOCUMENT;
            _context.t3 = FRISTNAME;
            _context.t4 = MIDDLENAME;
            _context.t5 = LASTNAME;
            _context.t6 = AGE;
            _context.t7 = EMAIL;
            _context.next = 12;
            return (0, _bcrypt.encrptPassword)(PAS_USER);

          case 12:
            _context.t8 = _context.sent;
            _context.t9 = ROL;
            _context.t10 = DAT_BIRTH;
            _context.t11 = COD_COUNTRY;
            _context.t12 = COD_STATE;
            _context.t13 = COD_CITY;
            _context.t14 = DES_ADDRESS;
            _context.t15 = NUM_AREA;
            _context.t16 = NUM_PHONE;
            _context.t17 = USR_ADD;
            _context.t18 = {
              ID: _context.t1,
              TIP_DOCUMENT: _context.t2,
              FRISTNAME: _context.t3,
              MIDDLENAME: _context.t4,
              LASTNAME: _context.t5,
              AGE: _context.t6,
              EMAIL: _context.t7,
              PAS_USER: _context.t8,
              ROL: _context.t9,
              DAT_BIRTH: _context.t10,
              COD_COUNTRY: _context.t11,
              COD_STATE: _context.t12,
              COD_CITY: _context.t13,
              DES_ADDRESS: _context.t14,
              NUM_AREA: _context.t15,
              NUM_PHONE: _context.t16,
              USR_ADD: _context.t17
            };
            _context.t19 = {
              replacements: _context.t18
            };
            _context.next = 26;
            return _context.t0.query.call(_context.t0, "CALL INS_USER(:ID,:TIP_DOCUMENT,:FRISTNAME,:MIDDLENAME,:LASTNAME,:AGE,:EMAIL,:PAS_USER,:ROL,:DAT_BIRTH,:COD_COUNTRY,:COD_STATE,:COD_CITY,:DES_ADDRESS,:NUM_AREA,:NUM_PHONE, :USR_ADD)", _context.t19)["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 26:
            _context.next = 28;
            return _Users.USERS.findOne({
              where: {
                EMAIL: EMAIL
              }
            });

          case 28:
            User = _context.sent;
            _context.next = 31;
            return _jsonwebtoken["default"].sign({
              id: User.COD_USER
            }, process.env.JWTSECRET);

          case 31:
            token = _context.sent;

            _Users.USERS.update({
              API_TOKEN: token
            }, {
              where: {
                EMAIL: EMAIL
              }
            });

            _context.next = 35;
            return _email.transport.sendMail((0, _email.configTransportVery)(FRISTNAME, LASTNAME, EMAIL.replace("@", "%40"), token, req.headers.host, User.COD_USER));

          case 35:
            return _context.abrupt("return", res.status(201).json({
              token: token
            }));

          case 38:
            _context.prev = 38;
            _context.t20 = _context["catch"](0);
            (0, _handleError.HttpError)(res, _context.t20);
            next();

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 38]]);
  }));

  return function singUp(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.singUp = singUp;

var singIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$body2, EMAIL, PAS_USER, UserFond, PermissionUser, CustomerUser, PeopleFond, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, EMAIL = _req$body2.EMAIL, PAS_USER = _req$body2.PAS_USER;
            _context2.prev = 1;
            _context2.next = 4;
            return _Users.USERS.findOne({
              where: {
                EMAIL: EMAIL
              }
            });

          case 4:
            UserFond = _context2.sent;

            if (UserFond) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              token: null,
              message: "Pass o User invalidos"
            }));

          case 7:
            _context2.next = 9;
            return (0, _bcrypt.compararPassword)(PAS_USER, UserFond.PAS_USER);

          case 9:
            if (_context2.sent) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              token: null,
              message: "Pass o User invalidos"
            }));

          case 11:
            if (UserFond.IND_USR) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              token: null,
              message: "User no activo"
            }));

          case 13:
            if (UserFond.EMAIL_VERIFIED) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              token: null,
              message: "Confirme su correo electrónico"
            }));

          case 15:
            _context2.next = 17;
            return _database["default"].query("CALL SHOW_PERMISOS_USER_ID(:COD_USER)", {
              replacements: {
                COD_USER: UserFond.COD_USER
              }
            });

          case 17:
            PermissionUser = _context2.sent;
            _context2.next = 20;
            return _Pa_customes.PA_CUSTOMES.findOne({
              where: {
                COD_USER: UserFond.COD_USER
              }
            });

          case 20:
            CustomerUser = _context2.sent;
            _context2.next = 23;
            return _Pa_people.PA_POEPLE.findOne({
              where: {
                COD_PEOPLE: UserFond.COD_PEOPLE
              }
            });

          case 23:
            PeopleFond = _context2.sent;
            token = _jsonwebtoken["default"].sign({
              id: UserFond.COD_USER
            }, process.env.JWTSECRET);
            return _context2.abrupt("return", res.status(200).json({
              ok: true,
              COD_USER: UserFond.COD_USER,
              IMG_FHOTO: UserFond.PROFILE_PHOTO_PATH,
              EMAIL: UserFond.EMAIL,
              NAME: PeopleFond.FRISTNAME,
              LASTNAME: PeopleFond.LASTNAME,
              token: token,
              PermissionUser: PermissionUser,
              CustomerUser: CustomerUser
            }));

          case 28:
            _context2.prev = 28;
            _context2.t0 = _context2["catch"](1);
            (0, _handleError.HttpError)(res, _context2.t0);
            next();

          case 32:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 28]]);
  }));

  return function singIn(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.singIn = singIn;

var RevalidarToken = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var User, PermissionUser, CustomerUser, PeopleFond, token;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (req.userId) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(203).json({
              ok: false,
              message: "Token no valido"
            }));

          case 3:
            _context3.next = 5;
            return _Users.USERS.findByPk(req.userId);

          case 5:
            User = _context3.sent;

            if (User) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(203).json({
              ok: false,
              message: "Token no valido"
            }));

          case 8:
            _context3.next = 10;
            return _database["default"].query("CALL SHOW_PERMISOS_USER_ID(:COD_USER)", {
              replacements: {
                COD_USER: User.COD_USER
              }
            });

          case 10:
            PermissionUser = _context3.sent;
            _context3.next = 13;
            return _Pa_customes.PA_CUSTOMES.findOne({
              where: {
                COD_USER: User.COD_USER
              }
            });

          case 13:
            CustomerUser = _context3.sent;
            _context3.next = 16;
            return _Pa_people.PA_POEPLE.findOne({
              where: {
                COD_PEOPLE: User.COD_PEOPLE
              }
            });

          case 16:
            PeopleFond = _context3.sent;
            token = _jsonwebtoken["default"].sign({
              id: User.COD_USER
            }, process.env.JWTSECRET);
            return _context3.abrupt("return", res.status(200).json({
              ok: true,
              COD_USER: User.COD_USER,
              IMG_FHOTO: User.PROFILE_PHOTO_PATH,
              EMAIL: User.EMAIL,
              NAME: PeopleFond.FRISTNAME,
              LASTNAME: PeopleFond.LASTNAME,
              token: token,
              PermissionUser: PermissionUser,
              CustomerUser: CustomerUser
            }));

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 25:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 21]]);
  }));

  return function RevalidarToken(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.RevalidarToken = RevalidarToken;
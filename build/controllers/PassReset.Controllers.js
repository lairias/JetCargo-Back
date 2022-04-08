"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/security/SE_pass_reset"),
    Se_PASS_RESET = _require.Se_PASS_RESET;

var _require2 = require("../models/Users"),
    USERS = _require2.USERS;

var _require3 = require("../models/Pa_people"),
    PA_POEPLE = _require3.PA_POEPLE;

var jwt = require("jsonwebtoken");

var _require4 = require("../helpers/bcrypt"),
    encrptPassword = _require4.encrptPassword;

var _require5 = require("../email"),
    transport = _require5.transport,
    configTransportResetPass = _require5.configTransportResetPass;

require('dotenv').config();

var sequelize = require("../config/database/index");

var _require6 = require("../helpers/handleError"),
    HttpError = _require6.HttpError;

var _require7 = require("../models/security/Se_seguridad"),
    SE_SEGURIDAD = _require7.SE_SEGURIDAD;

exports.CreatePassReset = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var EMAIL, UserFond, timeToken, UserReset, token, time, People, _People;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            EMAIL = req.body.EMAIL;
            _context.prev = 1;
            _context.next = 4;
            return USERS.findOne({
              where: {
                EMAIL: EMAIL
              }
            });

          case 4:
            UserFond = _context.sent;

            if (UserFond) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.sendStatus(400));

          case 7:
            _context.next = 9;
            return SE_SEGURIDAD.findByPk(1);

          case 9:
            timeToken = _context.sent;
            _context.next = 12;
            return Se_PASS_RESET.findOne({
              where: {
                EMAIL: EMAIL
              }
            });

          case 12:
            UserReset = _context.sent;
            token = JWT.sign({
              email: UserFond.EMAIL,
              id: UserFond.COD_USER
            }, process.env.JWTSECRETPASSWORD, {
              expiresIn: parseInt(timeToken.DATO_SEGURIDAD)
            });
            time = timeToken.DATO_SEGURIDAD / 3600;

            if (!UserReset) {
              _context.next = 25;
              break;
            }

            _context.next = 18;
            return PA_POEPLE.findByPk(UserFond.COD_PEOPLE);

          case 18:
            People = _context.sent;
            _context.next = 21;
            return transport.sendMail(configTransportResetPass(People.FRISTNAME, People.LASTNAME, UserFond.EMAIL.replace("@", "%40"), token, req.headers.host, UserFond.COD_USER, time));

          case 21:
            _context.next = 23;
            return Se_PASS_RESET.update({
              API_TOKEN: token
            }, {
              where: {
                EMAIL: EMAIL
              }
            });

          case 23:
            _context.next = 32;
            break;

          case 25:
            _context.next = 27;
            return PA_POEPLE.findByPk(UserFond.COD_PEOPLE);

          case 27:
            _People = _context.sent;
            _context.next = 30;
            return transport.sendMail(configTransportResetPass(_People.FRISTNAME, _People.LASTNAME, UserFond.EMAIL.replace("@", "%40"), token, req.headers.host, UserFond.COD_USER, time));

          case 30:
            _context.next = 32;
            return Se_PASS_RESET.create({
              EMAIL: EMAIL,
              API_TOKEN: token
            });

          case 32:
            return _context.abrupt("return", res.sendStatus(200));

          case 35:
            _context.prev = 35;
            _context.t0 = _context["catch"](1);
            HttpError(res, _context.t0);
            next();

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 35]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.ForgotPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$params, TOKEN, COD_USER, CORREO, PASS, UserReset;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, TOKEN = _req$params.TOKEN, COD_USER = _req$params.COD_USER, CORREO = _req$params.CORREO;
            PASS = req.body.PASS;
            _context2.prev = 2;
            _context2.next = 5;
            return Se_PASS_RESET.findOne({
              where: {
                API_TOKEN: TOKEN
              }
            });

          case 5:
            UserReset = _context2.sent;

            if (UserReset) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              message: "Enlace no valido, por favor intentar de nuevo"
            }));

          case 8:
            if (!(UserReset == null)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              message: "Enlace no valido, por favor intentar de nuevo"
            }));

          case 10:
            _context2.next = 12;
            return Se_PASS_RESET.destroy({
              where: {
                EMAIL: CORREO
              }
            });

          case 12:
            _context2.t0 = USERS;
            _context2.next = 15;
            return encrptPassword(PASS);

          case 15:
            _context2.t1 = _context2.sent;
            _context2.t2 = {
              PAS_USER: _context2.t1
            };
            _context2.t3 = {
              where: {
                COD_USER: COD_USER
              }
            };
            _context2.next = 20;
            return _context2.t0.update.call(_context2.t0, _context2.t2, _context2.t3);

          case 20:
            return _context2.abrupt("return", res.sendStatus(200));

          case 23:
            _context2.prev = 23;
            _context2.t4 = _context2["catch"](2);
            HttpError(res, _context2.t4);
            next();

          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 23]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetPassReset = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var EMAIL, cities;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            EMAIL = req.params.EMAIL;
            _context3.prev = 1;
            _context3.next = 4;
            return Se_PASS_RESET.findByPk(EMAIL);

          case 4:
            cities = _context3.sent;

            if (cities) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(203).json({
              message: "Link no valido"
            }));

          case 7:
            return _context3.abrupt("return", res.status(200).json(cities));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            HttpError(res, _context3.t0);
            next();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpdatePassReset = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var EMAIL, API_TOKEN;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            EMAIL = req.params.EMAIL;
            API_TOKEN = req.body.API_TOKEN;
            _context4.prev = 2;
            _context4.next = 5;
            return sequelize.query("CALL INS_PASS_RESET(:EMAIL,:API_TOKEN)", {
              replacements: {
                EMAIL: EMAIL,
                API_TOKEN: API_TOKEN
              }
            })["catch"](function (error) {
              console.log(error);
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 5:
            return _context4.abrupt("return", res.sendStatus(200));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            HttpError(res, _context4.t0);
            next();

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeletePassReset = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var EMAIL;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            EMAIL = req.params.EMAIL;
            _context5.prev = 1;
            _context5.next = 4;
            return Se_PASS_RESET.destroy({
              where: {
                EMAIL: EMAIL
              }
            });

          case 4:
            return _context5.abrupt("return", res.sendStatus(200));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            HttpError(res, _context5.t0);
            next();

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/Pa_cities"),
    PA_CITIES = _require.PA_CITIES;

var _require2 = require("../models/Pa_states"),
    PA_STATES = _require2.PA_STATES;

var sequelize = require("../config/database/index");

var _require3 = require("../helpers/handleError"),
    HttpError = _require3.HttpError;

exports.GetCitiesForState = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_STATE, cities;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_STATE = req.params.COD_STATE;
            _context.prev = 1;
            _context.next = 4;
            return sequelize.query("CALL SHOW_CITY_STATE(:COD_STATE)", {
              replacements: {
                COD_STATE: COD_STATE
              }
            });

          case 4:
            cities = _context.sent;
            return _context.abrupt("return", res.status(200).json(cities));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            HttpError(res, _context.t0);
            next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetCities = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var cities;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return PA_CITIES.findAll({
              where: {
                IND_CITY: 1
              }
            });

          case 3:
            cities = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(cities));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            HttpError(res, _context2.t0);
            next();

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreateCity = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, NAM_CITY, ZIP_CODE, POS_CODE, POPULATION, CURRENCY, TIMEZONE, DES_CITY, USR_ADD, COD_STATE, cities;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, NAM_CITY = _req$body.NAM_CITY, ZIP_CODE = _req$body.ZIP_CODE, POS_CODE = _req$body.POS_CODE, POPULATION = _req$body.POPULATION, CURRENCY = _req$body.CURRENCY, TIMEZONE = _req$body.TIMEZONE, DES_CITY = _req$body.DES_CITY, USR_ADD = _req$body.USR_ADD, COD_STATE = _req$body.COD_STATE;
            _context3.prev = 1;
            _context3.next = 4;
            return sequelize.query("CALL INS_CITIES(\n      :NAM_CITY,\n      :ZIP_CODE,\n      :POS_CODE,\n      :POPULATION,\n      :CURRENCY,\n      :TIMEZONE,\n      :DES_CITY,\n      :USR_ADD,\n     :COD_STATE)", {
              replacements: {
                NAM_CITY: NAM_CITY,
                ZIP_CODE: ZIP_CODE,
                POS_CODE: POS_CODE,
                POPULATION: POPULATION,
                CURRENCY: CURRENCY,
                TIMEZONE: TIMEZONE,
                DES_CITY: DES_CITY,
                USR_ADD: USR_ADD,
                COD_STATE: COD_STATE
              }
            })["catch"](function (error) {
              console.log(error);
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            cities = _context3.sent;
            return _context3.abrupt("return", res.sendStatus(200));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            HttpError(res, _context3.t0);
            next();

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpdateCity = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body2, NAM_CITY, ZIP_CODE, POS_CODE, POPULATION, CURRENCY, TIMEZONE, DES_CITY, USR_UPD, COD_STATE, COD_CITY, cities;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, NAM_CITY = _req$body2.NAM_CITY, ZIP_CODE = _req$body2.ZIP_CODE, POS_CODE = _req$body2.POS_CODE, POPULATION = _req$body2.POPULATION, CURRENCY = _req$body2.CURRENCY, TIMEZONE = _req$body2.TIMEZONE, DES_CITY = _req$body2.DES_CITY, USR_UPD = _req$body2.USR_UPD, COD_STATE = _req$body2.COD_STATE;
            COD_CITY = req.params.COD_CITY;
            _context4.prev = 2;
            _context4.next = 5;
            return sequelize.query("CALL UPD_CITIES(\n        :COD_CITY,\n      :NAM_CITY,\n      :ZIP_CODE,\n      :POS_CODE,\n      :POPULATION,\n      :CURRENCY,\n      :TIMEZONE,\n      :DES_CITY,\n      :USR_UPD,\n     :COD_STATE)", {
              replacements: {
                COD_CITY: COD_CITY,
                NAM_CITY: NAM_CITY,
                ZIP_CODE: ZIP_CODE,
                POS_CODE: POS_CODE,
                POPULATION: POPULATION,
                CURRENCY: CURRENCY,
                TIMEZONE: TIMEZONE,
                DES_CITY: DES_CITY,
                USR_UPD: USR_UPD,
                COD_STATE: COD_STATE
              }
            })["catch"](function (error) {
              console.log(error);
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 5:
            cities = _context4.sent;
            return _context4.abrupt("return", res.sendStatus(200));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            HttpError(res, _context4.t0);
            next();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteCity = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var COD_CITY, cities;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            COD_CITY = req.params.COD_CITY;
            _context5.prev = 1;
            _context5.next = 4;
            return PA_CITIES.destroy({
              where: {
                COD_CITY: COD_CITY
              }
            });

          case 4:
            cities = _context5.sent;
            return _context5.abrupt("return", res.sendStatus(200));

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            HttpError(res, _context5.t0);
            next();

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.GetCity = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var COD_CITY, cities;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            COD_CITY = req.params.COD_CITY;
            _context6.prev = 1;
            _context6.next = 4;
            return PA_CITIES.findByPk({
              WHERE: {
                COD_CITY: COD_CITY
              }
            });

          case 4:
            cities = _context6.sent;
            return _context6.abrupt("return", res.status(200).json(cities));

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            HttpError(res, _context6.t0);
            next();

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
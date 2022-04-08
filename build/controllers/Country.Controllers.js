"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/Pa_countries"),
    PA_COUNTRIES = _require.PA_COUNTRIES;

var sequelize = require("../config/database/index");

var _require2 = require("../helpers/handleError"),
    HttpError = _require2.HttpError;

exports.GetCountries = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var cities;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return PA_COUNTRIES.findAll({
              where: {
                IND_COUNTRY: 1
              }
            });

          case 3:
            cities = _context.sent;
            return _context.abrupt("return", res.status(200).json(cities));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            HttpError(res, _context.t0);
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetCountry = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var COD_COUNTRY, cities;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            COD_COUNTRY = req.params.COD_COUNTRY;
            _context2.prev = 1;
            _context2.next = 4;
            return PA_COUNTRIES.findByPk(COD_COUNTRY);

          case 4:
            cities = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(cities));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            HttpError(res, _context2.t0);
            next();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreateCountry = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, NAM_COUNTRY, DES_COUNTRY, USR_ADD, cities;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, NAM_COUNTRY = _req$body.NAM_COUNTRY, DES_COUNTRY = _req$body.DES_COUNTRY, USR_ADD = _req$body.USR_ADD;
            _context3.prev = 1;
            _context3.next = 4;
            return sequelize.query("CALL INS_COUNTRY(:NAM_COUNTRY,:DES_COUNTRY,:USR_ADD)", {
              replacements: {
                NAM_COUNTRY: NAM_COUNTRY,
                DES_COUNTRY: DES_COUNTRY,
                USR_ADD: USR_ADD
              }
            })["catch"](function (error) {
              console.log(error);
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            cities = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(cities));

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

exports.DeleteCountrie = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var COD_COUNTRY, cities;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            COD_COUNTRY = req.params.COD_COUNTRY;
            _context4.prev = 1;
            _context4.next = 4;
            return PA_COUNTRIES.destroy({
              where: {
                COD_COUNTRY: COD_COUNTRY
              }
            })["catch"](function (error) {
              console.log(error);
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            cities = _context4.sent;
            return _context4.abrupt("return", res.status(200).json(cities));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            HttpError(res, _context4.t0);
            next();

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.UpdateCountrie = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body2, NAM_COUNTRY, DES_COUNTRY, USR_UPD, COD_COUNTRY, cities;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, NAM_COUNTRY = _req$body2.NAM_COUNTRY, DES_COUNTRY = _req$body2.DES_COUNTRY, USR_UPD = _req$body2.USR_UPD;
            COD_COUNTRY = req.params.COD_COUNTRY;
            _context5.prev = 2;
            _context5.next = 5;
            return sequelize.query("CALL UPD_COUNTRY(:COD_COUNTRY,:NAM_COUNTRY,:DES_COUNTRY,:USR_UPD)", {
              replacements: {
                COD_COUNTRY: COD_COUNTRY,
                NAM_COUNTRY: NAM_COUNTRY,
                DES_COUNTRY: DES_COUNTRY,
                USR_UPD: USR_UPD
              }
            });

          case 5:
            cities = _context5.sent;
            return _context5.abrupt("return", res.status(200).json(cities));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            HttpError(res, _context5.t0);
            next();

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
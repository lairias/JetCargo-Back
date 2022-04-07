"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateState = exports.GetStatesForCountry = exports.GetStates = exports.GetState = exports.DeleteState = exports.CreateState = void 0;

var _sequelize = require("sequelize");

var _Pa_states = require("../models/Pa_states");

var _handleError = require("../helpers/handleError");

var _index = _interopRequireDefault(require("../config/database/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetStates = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var cities;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Pa_states.PA_STATES.findAll({
              where: {
                IND_STATE: 1
              }
            });

          case 3:
            cities = _context.sent;
            return _context.abrupt("return", res.status(200).json(cities));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function GetStates(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetStates = GetStates;

var GetStatesForCountry = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var COD_COUNTRY, cities;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            COD_COUNTRY = req.params.COD_COUNTRY;
            _context2.prev = 1;
            _context2.next = 4;
            return _index["default"].query("CALL SHOW_STATES_COUNTRY(:COD_COUNTRY)", {
              replacements: {
                COD_COUNTRY: COD_COUNTRY
              }
            })["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            cities = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(cities));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            (0, _handleError.HttpError)(res, _context2.t0);
            next();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function GetStatesForCountry(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetStatesForCountry = GetStatesForCountry;

var DeleteState = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var COD_STATE;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            COD_STATE = req.params.COD_STATE;
            _context3.prev = 1;
            _context3.next = 4;
            return _Pa_states.PA_STATES.destroy({
              where: {
                COD_STATE: COD_STATE
              }
            });

          case 4:
            return _context3.abrupt("return", res.sendStatus(200));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));

  return function DeleteState(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.DeleteState = DeleteState;

var UpdateState = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var COD_STATE, _req$body, NAM_STATE, DES_STATE, USR_UPD, COD_COUNTRY;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            COD_STATE = req.params.COD_STATE;
            _req$body = req.body, NAM_STATE = _req$body.NAM_STATE, DES_STATE = _req$body.DES_STATE, USR_UPD = _req$body.USR_UPD, COD_COUNTRY = _req$body.COD_COUNTRY;
            _context4.prev = 2;
            _context4.next = 5;
            return _index["default"].query("CALL UPD_STATE(:COD_STATE, :NAM_STATE,:DES_STATE ,:USR_UPD ,:COD_COUNTRY ) ", {
              replacements: {
                COD_STATE: COD_STATE,
                NAM_STATE: NAM_STATE,
                DES_STATE: DES_STATE,
                USR_UPD: USR_UPD,
                COD_COUNTRY: COD_COUNTRY
              }
            })["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 5:
            return _context4.abrupt("return", res.sendStatus(200));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            (0, _handleError.HttpError)(res, _context4.t0);
            next();

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8]]);
  }));

  return function UpdateState(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.UpdateState = UpdateState;

var CreateState = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body2, NAM_STATE, DES_STATE, USR_ADD, COD_COUNTRY, cities;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, NAM_STATE = _req$body2.NAM_STATE, DES_STATE = _req$body2.DES_STATE, USR_ADD = _req$body2.USR_ADD, COD_COUNTRY = _req$body2.COD_COUNTRY;
            console.log(req.body);
            _context5.prev = 2;
            _context5.next = 5;
            return _index["default"].query("CALL INS_STATE(:NAM_STATE,:DES_STATE,:USR_ADD,:COD_COUNTRY)", {
              replacements: {
                NAM_STATE: NAM_STATE,
                DES_STATE: DES_STATE,
                USR_ADD: USR_ADD,
                COD_COUNTRY: COD_COUNTRY
              }
            })["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 5:
            cities = _context5.sent;
            return _context5.abrupt("return", res.sendStatus(200));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            (0, _handleError.HttpError)(res, _context5.t0);
            next();

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));

  return function CreateState(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.CreateState = CreateState;

var GetState = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var COD_STATE, cities;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            COD_STATE = req.params.COD_STATE;
            _context6.prev = 1;
            _context6.next = 4;
            return _Pa_states.PA_STATES.findOne({
              where: {
                COD_STATE: COD_STATE
              }
            });

          case 4:
            cities = _context6.sent;
            return _context6.abrupt("return", res.status(200).json(cities));

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            (0, _handleError.HttpError)(res, _context6.t0);
            next();

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function GetState(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.GetState = GetState;
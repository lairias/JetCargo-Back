"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdatePeople = exports.GetPeoples = exports.GetPeople = exports.DeletePeople = exports.CreatePeople = void 0;

var _Pa_people = require("../models/Pa_people");

var _database = _interopRequireDefault(require("../config/database"));

var _handleError = require("../helpers/handleError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetPeoples = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var people;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Pa_people.PA_POEPLE.findAll();

          case 3:
            people = _context.sent;
            return _context.abrupt("return", res.status(200).json(people));

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

  return function GetPeoples(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetPeoples = GetPeoples;

var GetPeople = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var COD_PEOPLE, people;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            COD_PEOPLE = req.params.COD_PEOPLE;
            _context2.prev = 1;
            _context2.next = 4;
            return _Pa_people.PA_POEPLE.findByPk(COD_PEOPLE);

          case 4:
            people = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(people));

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

  return function GetPeople(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetPeople = GetPeople;

var DeletePeople = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var COD_PEOPLE;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            COD_PEOPLE = req.params.COD_PEOPLE;
            _context3.prev = 1;
            _context3.next = 4;
            return _Pa_people.PA_POEPLE.destroy({
              where: {
                COD_PEOPLE: COD_PEOPLE
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

  return function DeletePeople(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.DeletePeople = DeletePeople;

var CreatePeople = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body, ID, TIP_DOCUMENT, FRISTNAME, MIDDLENAME, LASTNAME, AGE, TIP_PERSON, USR_ADD, people;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, ID = _req$body.ID, TIP_DOCUMENT = _req$body.TIP_DOCUMENT, FRISTNAME = _req$body.FRISTNAME, MIDDLENAME = _req$body.MIDDLENAME, LASTNAME = _req$body.LASTNAME, AGE = _req$body.AGE, TIP_PERSON = _req$body.TIP_PERSON, USR_ADD = _req$body.USR_ADD;
            _context4.prev = 1;
            _context4.next = 4;
            return _database["default"].query("CALL INS_PEOPLE( :ID, :TIP_DOCUMENT,:FRISTNAME,:MIDDLENAME,:LASTNAME,:AGE,:TIP_PERSON,:USR_ADD)", {
              replacements: {
                ID: ID,
                TIP_DOCUMENT: TIP_DOCUMENT,
                FRISTNAME: FRISTNAME,
                MIDDLENAME: MIDDLENAME,
                LASTNAME: LASTNAME,
                AGE: AGE,
                TIP_PERSON: TIP_PERSON,
                USR_ADD: USR_ADD
              }
            })["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            people = _context4.sent;
            return _context4.abrupt("return", res.sendStatus(200));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            (0, _handleError.HttpError)(res, _context4.t0);
            next();

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function CreatePeople(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.CreatePeople = CreatePeople;

var UpdatePeople = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body2, ID, TIP_DOCUMENT, FRISTNAME, MIDDLENAME, LASTNAME, AGE, TIP_PERSON, USR_UPD, COD_PEOPLE, people;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, ID = _req$body2.ID, TIP_DOCUMENT = _req$body2.TIP_DOCUMENT, FRISTNAME = _req$body2.FRISTNAME, MIDDLENAME = _req$body2.MIDDLENAME, LASTNAME = _req$body2.LASTNAME, AGE = _req$body2.AGE, TIP_PERSON = _req$body2.TIP_PERSON, USR_UPD = _req$body2.USR_UPD;
            COD_PEOPLE = req.params.COD_PEOPLE;
            _context5.prev = 2;
            _context5.next = 5;
            return _database["default"].query("CALL UPD_PEOPLE( :COD_PEOPLE,:ID, :TIP_DOCUMENT,:FRISTNAME,:MIDDLENAME,:LASTNAME,:AGE,:TIP_PERSON,:USR_UPD)", {
              replacements: {
                COD_PEOPLE: COD_PEOPLE,
                ID: ID,
                TIP_DOCUMENT: TIP_DOCUMENT,
                FRISTNAME: FRISTNAME,
                MIDDLENAME: MIDDLENAME,
                LASTNAME: LASTNAME,
                AGE: AGE,
                TIP_PERSON: TIP_PERSON,
                USR_UPD: USR_UPD
              }
            })["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 5:
            people = _context5.sent;
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

  return function UpdatePeople(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.UpdatePeople = UpdatePeople;
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/BO_locker"),
    BO_LOCKER = _require.BO_LOCKER;

var sequelize = require("../config/database/index");

var _require2 = require("../helpers/handleError"),
    HttpError = _require2.HttpError;

var _require3 = require("../models/relations/REL_customer_locker"),
    REL_CUSTOMER_LOKER = _require3.REL_CUSTOMER_LOKER;

var _require4 = require("../email"),
    AsignacionLokerCustomers = _require4.AsignacionLokerCustomers,
    transport = _require4.transport;

exports.GetLokers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var lockers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return BO_LOCKER.findAll();

          case 3:
            lockers = _context.sent;

            if (lockers) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              ok: false,
              lockers: lockers
            }));

          case 6:
            return _context.abrupt("return", res.status(200).json({
              ok: true,
              lockers: lockers
            }));

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

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetLokersind = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var lockersInd;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return BO_LOCKER.findAll({
              where: {
                IND_LOCKER: true
              }
            });

          case 3:
            lockersInd = _context2.sent;

            if (lockersInd) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              ok: false,
              lockersInd: lockersInd
            }));

          case 6:
            return _context2.abrupt("return", res.status(200).json({
              ok: true,
              lockersInd: lockersInd
            }));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            HttpError(res, _context2.t0);
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetLoker = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var COD_LOCKER, cities;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            COD_LOCKER = req.params.COD_LOCKER;
            _context3.prev = 1;
            _context3.next = 4;
            return BO_LOCKER.findByPk(COD_LOCKER);

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

exports.GetLokerByPeople = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var COD_LOCKER, cities;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            COD_LOCKER = req.params.COD_LOCKER;
            _context4.prev = 1;
            _context4.next = 4;
            return BO_LOCKER.findByPk(COD_LOCKER);

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

exports.GetLokerByCustomer = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var COD_CUSTOMER, lokerCustomer;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            COD_CUSTOMER = req.params.COD_CUSTOMER;
            _context5.prev = 1;
            _context5.next = 4;
            return sequelize.query("CALL SHOW_LOCKER_CUSTOMER(:COD_CUSTOMER)", {
              replacements: {
                COD_CUSTOMER: COD_CUSTOMER
              }
            });

          case 4:
            lokerCustomer = _context5.sent;

            if (JSON.stringify(lokerCustomer[0])) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.status(200).json({
              ok: false,
              locker: false
            }));

          case 7:
            return _context5.abrupt("return", res.status(200).json({
              ok: true,
              locker: lokerCustomer
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            HttpError(res, _context5.t0);
            next();

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.CreateLoker = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var _req$body, COD_PEOPLE, NUM_LOCKER, TYP_LOCKER, USR_ADD;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, COD_PEOPLE = _req$body.COD_PEOPLE, NUM_LOCKER = _req$body.NUM_LOCKER, TYP_LOCKER = _req$body.TYP_LOCKER, USR_ADD = _req$body.USR_ADD;
            _context6.prev = 1;
            _context6.next = 4;
            return sequelize.query("CALL INS_LOCKER(:COD_PEOPLE,:NUM_LOCKER,:TYP_LOCKER, :USR_ADD)", {
              replacements: {
                COD_PEOPLE: COD_PEOPLE,
                NUM_LOCKER: NUM_LOCKER,
                TYP_LOCKER: TYP_LOCKER,
                USR_ADD: USR_ADD
              }
            })["catch"](function (error) {
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            return _context6.abrupt("return", res.sendStatus(200));

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            HttpError(res, _context6.t0);
            next();

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 7]]);
  }));

  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.CreateLokerCustomers = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
    var _req$body2, COD_CUSTOMER, COD_LOCKER, FRISTNAME, LASTNAME, EMAIL, locker, lokerCustomer, numero_casillero;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, COD_CUSTOMER = _req$body2.COD_CUSTOMER, COD_LOCKER = _req$body2.COD_LOCKER, FRISTNAME = _req$body2.FRISTNAME, LASTNAME = _req$body2.LASTNAME, EMAIL = _req$body2.EMAIL;
            console.log(req.body);
            _context7.prev = 2;
            _context7.next = 5;
            return REL_CUSTOMER_LOKER.create({
              COD_CUSTOMER: COD_CUSTOMER,
              COD_LOCKER: COD_LOCKER
            });

          case 5:
            locker = _context7.sent;
            _context7.next = 8;
            return sequelize.query("CALL SHOW_LOCKER_CUSTOMER(:COD_CUSTOMER)", {
              replacements: {
                COD_CUSTOMER: COD_CUSTOMER
              }
            });

          case 8:
            lokerCustomer = _context7.sent;
            numero_casillero = lokerCustomer[0].NUM_LOCKER;
            _context7.next = 12;
            return transport.sendMail(AsignacionLokerCustomers(FRISTNAME, LASTNAME, numero_casillero, EMAIL));

          case 12:
            return _context7.abrupt("return", res.status(200).json({
              ok: true,
              locker: locker
            }));

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](2);
            HttpError(res, _context7.t0);
            next();

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 15]]);
  }));

  return function (_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.DeleteLoker = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res, next) {
    var COD_LOCKER;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            COD_LOCKER = req.params.COD_LOCKER;
            _context8.prev = 1;
            _context8.next = 4;
            return BO_LOCKER.destroy({
              where: {
                COD_LOCKER: COD_LOCKER
              }
            });

          case 4:
            return _context8.abrupt("return", res.sendStatus(200));

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](1);
            HttpError(res, _context8.t0);
            next();

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 7]]);
  }));

  return function (_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.UpdateLoker = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res, next) {
    var _req$body3, COD_PEOPLE, NUM_LOCKER, TYP_LOCKER, IND_LOCKER, USR_UPD, COD_LOCKER, cities;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body3 = req.body, COD_PEOPLE = _req$body3.COD_PEOPLE, NUM_LOCKER = _req$body3.NUM_LOCKER, TYP_LOCKER = _req$body3.TYP_LOCKER, IND_LOCKER = _req$body3.IND_LOCKER, USR_UPD = _req$body3.USR_UPD;
            COD_LOCKER = req.params.COD_LOCKER;
            _context9.prev = 2;
            _context9.next = 5;
            return sequelize.query("CALL UPD_LOCKER(:COD_LOCKER,:COD_PEOPLE,:NUM_LOCKER,:TYP_LOCKER,:USR_UPD,:IND_LOCKER)", {
              replacements: {
                COD_LOCKER: COD_LOCKER,
                COD_PEOPLE: COD_PEOPLE,
                NUM_LOCKER: NUM_LOCKER,
                TYP_LOCKER: TYP_LOCKER,
                USR_UPD: USR_UPD,
                IND_LOCKER: IND_LOCKER
              }
            })["catch"](function (_) {
              throw res.sendStatus(500);
            });

          case 5:
            cities = _context9.sent;
            return _context9.abrupt("return", res.sendStatus(200));

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](2);
            HttpError(res, _context9.t0);
            next();

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 9]]);
  }));

  return function (_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();
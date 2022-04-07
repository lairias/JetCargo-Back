"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTracking = exports.TrackingNotOrdenType = exports.TrackingNotOrdenCustomer = exports.TrackingNotOrden = exports.GetTrackingsNumberService = exports.GetTrackingsNumber = exports.GetTrackings = exports.GetTracking_not_orden = exports.GetTracking = exports.DeleteTracking = exports.CreateTracking = void 0;

var _Pa_typeUsers = require("../models/Pa_typeUsers");

var _handleError = require("../helpers/handleError");

var _database = _interopRequireDefault(require("../config/database"));

var _randomCodes = _interopRequireDefault(require("random-codes"));

var _Bo_tracking = require("../models/Bo_tracking");

var _BO_package = require("../models/BO_package");

var _BO_typePackage = require("../models/BO_typePackage");

var _Send_msm = require("../config/Twilio/Send_msm");

var _Pa_people = require("../models/Pa_people");

var _REL_people_phone = require("../models/relations/REL_people_phone");

var _Users = require("../models/Users");

var _Pa_phones = require("../models/Pa_phones");

var _DE_service = require("../models/DE_service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TrackingNotOrdenType = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$params, COD_TYPEPACKAGE, RECEIVED_TRACKING, count, tracking;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, COD_TYPEPACKAGE = _req$params.COD_TYPEPACKAGE, RECEIVED_TRACKING = _req$params.RECEIVED_TRACKING;
            _context.prev = 1;
            _context.next = 4;
            return _database["default"].query("CALL COUNT_TRACKING_NOT_ORDEN()");

          case 4:
            count = _context.sent;
            _context.next = 7;
            return _database["default"].query("CALL SHOW_TRACKING_NOT_ORDEN_TYPEPACKAGE(:COD_TYPEPACKAGE,:RECEIVED_TRACKING)", {
              replacements: {
                COD_TYPEPACKAGE: COD_TYPEPACKAGE,
                RECEIVED_TRACKING: RECEIVED_TRACKING
              }
            });

          case 7:
            tracking = _context.sent;

            if (JSON.stringify(tracking[0])) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(203).json({
              ok: false,
              tracking: false,
              count: 0
            }));

          case 10:
            return _context.abrupt("return", res.status(203).json({
              ok: true,
              tracking: tracking,
              count: count
            }));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));

  return function TrackingNotOrdenType(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.TrackingNotOrdenType = TrackingNotOrdenType;

var TrackingNotOrdenCustomer = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$params2, RECEIVED_TRACKING, COD_CUSTOMER, NUM_TRACKING, tracking;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params2 = req.params, RECEIVED_TRACKING = _req$params2.RECEIVED_TRACKING, COD_CUSTOMER = _req$params2.COD_CUSTOMER, NUM_TRACKING = _req$params2.NUM_TRACKING;
            _context2.prev = 1;
            _context2.next = 4;
            return _database["default"].query("CALL SHOW_TRACKING_NOT_ORDEN_CUSTOMER(:RECEIVED_TRACKING,:COD_CUSTOMER,:NUM_TRACKING)", {
              replacements: {
                RECEIVED_TRACKING: RECEIVED_TRACKING,
                COD_CUSTOMER: COD_CUSTOMER,
                NUM_TRACKING: NUM_TRACKING
              }
            });

          case 4:
            tracking = _context2.sent;

            if (JSON.stringify(tracking[0])) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(203).json({
              ok: false,
              tracking: false
            }));

          case 7:
            return _context2.abrupt("return", res.status(203).json({
              ok: true,
              tracking: tracking
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            (0, _handleError.HttpError)(res, _context2.t0);
            next();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function TrackingNotOrdenCustomer(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.TrackingNotOrdenCustomer = TrackingNotOrdenCustomer;

var TrackingNotOrden = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var RECEIVED_TRACKING, count, tracking;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            RECEIVED_TRACKING = req.params.RECEIVED_TRACKING;
            _context3.prev = 1;
            _context3.next = 4;
            return _database["default"].query("CALL COUNT_TRACKING_NOT_ORDEN()");

          case 4:
            count = _context3.sent;
            _context3.next = 7;
            return _database["default"].query("CALL SHOW_TRACKING_NOT_ORDEN(:RECEIVED_TRACKING)", {
              replacements: {
                RECEIVED_TRACKING: RECEIVED_TRACKING
              }
            });

          case 7:
            tracking = _context3.sent;

            if (JSON.stringify(tracking[0])) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.status(203).json({
              ok: false,
              tracking: false,
              count: 0
            }));

          case 10:
            return _context3.abrupt("return", res.status(203).json({
              ok: true,
              tracking: tracking,
              count: count
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](1);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 13]]);
  }));

  return function TrackingNotOrden(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.TrackingNotOrden = TrackingNotOrden;

var GetTracking = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var COD_TRACKING, tracking;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            COD_TRACKING = req.params.COD_TRACKING;
            _context4.next = 4;
            return _Bo_tracking.BO_TRACKING.findOne({
              where: {
                COD_TRACKING: COD_TRACKING
              }
            });

          case 4:
            tracking = _context4.sent;

            if (tracking) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(203).json({
              ok: false,
              tracking: false
            }));

          case 7:
            return _context4.abrupt("return", res.status(203).json({
              ok: true,
              tracking: tracking
            }));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            (0, _handleError.HttpError)(res, _context4.t0);
            next();

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function GetTracking(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.GetTracking = GetTracking;

var GetTrackings = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Pa_typeUsers.PA_TypeUsers.findAll();

          case 3:
            return _context5.abrupt("return", res.status(200).json());

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            (0, _handleError.HttpError)(res, _context5.t0);
            next();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function GetTrackings(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.GetTrackings = GetTrackings;

var GetTrackingsNumber = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var NUM_TRACKING, tracking;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            NUM_TRACKING = req.params.NUM_TRACKING;
            _context6.prev = 1;
            _context6.next = 4;
            return _Bo_tracking.BO_TRACKING.findOne({
              where: {
                NUM_TRACKING: NUM_TRACKING
              }
            });

          case 4:
            tracking = _context6.sent;
            return _context6.abrupt("return", res.status(200).json({
              ok: true,
              Number_tracking: tracking
            }));

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

  return function GetTrackingsNumber(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.GetTrackingsNumber = GetTrackingsNumber;

var GetTrackingsNumberService = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
    var _req$params3, COD_SERVICE, NUM_TRACKING, resultado;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$params3 = req.params, COD_SERVICE = _req$params3.COD_SERVICE, NUM_TRACKING = _req$params3.NUM_TRACKING;
            _context7.prev = 1;
            _context7.next = 4;
            return _database["default"].query("CALL SHOW_TRACKING_SERVICE_ID(:COD_SERVICE,:NUM_TRACKING)", {
              replacements: {
                COD_SERVICE: COD_SERVICE,
                NUM_TRACKING: NUM_TRACKING
              }
            });

          case 4:
            resultado = _context7.sent;

            if (JSON.stringify(resultado[0])) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(200).json({
              ok: false,
              TrackingNumber: false
            }));

          case 7:
            return _context7.abrupt("return", res.status(200).json({
              ok: true,
              TrackingNumber: resultado
            }));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](1);
            (0, _handleError.HttpError)(res, _context7.t0);
            next();

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 10]]);
  }));

  return function GetTrackingsNumberService(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.GetTrackingsNumberService = GetTrackingsNumberService;

var GetTracking_not_orden = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res, next) {
    var _req$params4, COD_TRACKING, COD_PACKAGE, NUM_LOCKER, COD_CUSTOMER, cities;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$params4 = req.params, COD_TRACKING = _req$params4.COD_TRACKING, COD_PACKAGE = _req$params4.COD_PACKAGE, NUM_LOCKER = _req$params4.NUM_LOCKER, COD_CUSTOMER = _req$params4.COD_CUSTOMER;
            console.log("funciona");
            _context8.prev = 2;
            _context8.next = 5;
            return _database["default"].query("CALL SHOW_TRACKING_PACKAGE_NOT_ORDEN_ID(:COD_TRACKING,:COD_PACKAGE,:NUM_LOCKER,:COD_CUSTOMER)", {
              replacements: {
                COD_TRACKING: COD_TRACKING,
                COD_PACKAGE: COD_PACKAGE,
                NUM_LOCKER: NUM_LOCKER,
                COD_CUSTOMER: COD_CUSTOMER
              }
            });

          case 5:
            cities = _context8.sent;
            return _context8.abrupt("return", res.status(200).json(cities));

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](2);
            (0, _handleError.HttpError)(res, _context8.t0);
            next();

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 9]]);
  }));

  return function GetTracking_not_orden(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.GetTracking_not_orden = GetTracking_not_orden;

var UpdateTracking = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res, next) {
    var _req$body, HEIGHT_PACKAGE, WIDTH_PACKAGE, WEIGHT_PACKAGE, COD_TYPEPACKAGE, VOL_PACKAGE, NOM_PACKAGE, COD_CATPACKAGE, COD_SERVICE, RECEIVED_TRACKING, NUM_TRACKING, DES_TRACKING, COD_CUSTOMER, COD_PACKAGE, checbox, COD_TRACKING, CatPackage, tracking, PRICE_PACKAGE;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body = req.body, HEIGHT_PACKAGE = _req$body.HEIGHT_PACKAGE, WIDTH_PACKAGE = _req$body.WIDTH_PACKAGE, WEIGHT_PACKAGE = _req$body.WEIGHT_PACKAGE, COD_TYPEPACKAGE = _req$body.COD_TYPEPACKAGE, VOL_PACKAGE = _req$body.VOL_PACKAGE, NOM_PACKAGE = _req$body.NOM_PACKAGE, COD_CATPACKAGE = _req$body.COD_CATPACKAGE, COD_SERVICE = _req$body.COD_SERVICE, RECEIVED_TRACKING = _req$body.RECEIVED_TRACKING, NUM_TRACKING = _req$body.NUM_TRACKING, DES_TRACKING = _req$body.DES_TRACKING, COD_CUSTOMER = _req$body.COD_CUSTOMER, COD_PACKAGE = _req$body.COD_PACKAGE, checbox = _req$body.checbox;
            COD_TRACKING = req.params.COD_TRACKING;
            _context9.prev = 2;
            _context9.next = 5;
            return _BO_typePackage.BO_TYPEPACKAGE.findByPk(COD_TYPEPACKAGE);

          case 5:
            CatPackage = _context9.sent;
            _context9.next = 8;
            return _Bo_tracking.BO_TRACKING.update({
              COD_SERVICE: COD_SERVICE,
              DES_TRACKING: DES_TRACKING,
              NUM_TRACKING: NUM_TRACKING,
              RECEIVED_TRACKING: RECEIVED_TRACKING,
              IND_TRACKING: checbox
            }, {
              where: {
                COD_TRACKING: COD_TRACKING
              }
            });

          case 8:
            tracking = _context9.sent;
            PRICE_PACKAGE = parseFloat(CatPackage.PREC_TYPEPACKAGE) * parseFloat(WEIGHT_PACKAGE);
            _context9.next = 12;
            return _BO_package.BO_PACKAGE.update({
              COD_CATPACKAGE: COD_CATPACKAGE,
              COD_TYPEPACKAGE: COD_TYPEPACKAGE,
              NOM_PACKAGE: NOM_PACKAGE,
              HEIGHT_PACKAGE: HEIGHT_PACKAGE,
              WIDTH_PACKAGE: WIDTH_PACKAGE,
              WEIGHT_PACKAGE: WEIGHT_PACKAGE,
              PRICE_PACKAGE: PRICE_PACKAGE,
              VOL_PACKAGE: VOL_PACKAGE,
              IND_PACKAGE: checbox
            }, {
              where: {
                COD_PACKAGE: COD_PACKAGE
              }
            });

          case 12:
            _context9.next = 19;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            (0, _handleError.HttpError)(res, _context9.t0);
            next();

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 14]]);
  }));

  return function UpdateTracking(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.UpdateTracking = UpdateTracking;

var DeleteTracking = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res, next) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            try {} catch (error) {
              (0, _handleError.HttpError)(res, error);
              next();
            }

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function DeleteTracking(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.DeleteTracking = DeleteTracking;

var CreateTracking = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res, next) {
    var _req$body2, COD_SERVICE, COD_CATPACKAGE, COD_TYPEPACKAGE, NOM_PACKAGE, DES_TRACKING, NUM_TRACKING, COD_LOCKER, COD_CUSTOMER, rc, NUM_PACKAGE, tracking;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$body2 = req.body, COD_SERVICE = _req$body2.COD_SERVICE, COD_CATPACKAGE = _req$body2.COD_CATPACKAGE, COD_TYPEPACKAGE = _req$body2.COD_TYPEPACKAGE, NOM_PACKAGE = _req$body2.NOM_PACKAGE, DES_TRACKING = _req$body2.DES_TRACKING, NUM_TRACKING = _req$body2.NUM_TRACKING, COD_LOCKER = _req$body2.COD_LOCKER, COD_CUSTOMER = _req$body2.COD_CUSTOMER;
            console.log(req.body);
            _context11.prev = 2;
            rc = new _randomCodes["default"](config);
            NUM_PACKAGE = rc.generate();
            tracking = _database["default"].query("CALL INS_TRACKIN_ORDEN(:COD_CATPACKAGE,:COD_SERVICE,:COD_TYPEPACKAGE,:NOM_PACKAGE,:NUM_PACKAGE,:DES_TRACKING,:NUM_TRACKING,:COD_LOCKER,:COD_CUSTOMER)", {
              replacements: {
                COD_CATPACKAGE: COD_CATPACKAGE,
                COD_SERVICE: COD_SERVICE,
                COD_TYPEPACKAGE: COD_TYPEPACKAGE,
                NOM_PACKAGE: NOM_PACKAGE,
                NUM_PACKAGE: NUM_PACKAGE,
                DES_TRACKING: DES_TRACKING,
                NUM_TRACKING: NUM_TRACKING,
                COD_LOCKER: COD_LOCKER,
                COD_CUSTOMER: COD_CUSTOMER
              }
            });
            return _context11.abrupt("return", res.status(200).json({
              ok: true,
              TrackingNumber: tracking
            }));

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](2);
            (0, _handleError.HttpError)(res, _context11.t0);
            next();

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 9]]);
  }));

  return function CreateTracking(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.CreateTracking = CreateTracking;
var config = {
  // A string containing available chars
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  // Separator char used to divide code parts
  separator: "-",
  // Char used to mask code
  mask: "*",
  // Number of parts the code contains
  parts: 2,
  // Size of each part
  part_size: 4,
  // Function used to get a random char from the chars pool
  // (Please use a better one)
  getChar: function getChar(pool) {
    var random = Math.floor(Math.random() * pool.length);
    return pool.charAt(random);
  }
};
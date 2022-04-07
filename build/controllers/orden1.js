"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOrdenTracking = exports.GetOrdenByTracking = exports.GetOrdenByNumberTracking = void 0;

var _index = _interopRequireDefault(require("../config/database/index"));

var _handleError = require("../helpers/handleError");

var _DE_orden = require("../models/DE_orden");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetOrdenTracking = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_TRACKING, OrdenTracking;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_TRACKING = req.params.COD_TRACKING;
            _context.prev = 1;
            _context.next = 4;
            return _DE_orden.DE_ORDEN.findOne({
              where: {
                COD_TRACKING: COD_TRACKING
              }
            });

          case 4:
            OrdenTracking = _context.sent;

            if (JSON.stringify(OrdenTracking[0])) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              ok: false,
              OrdenTracking: false
            }));

          case 7:
            return _context.abrupt("return", res.status(200).json({
              ok: true,
              OrdenTracking: OrdenTracking
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function GetOrdenTracking(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetOrdenTracking = GetOrdenTracking;

var GetOrdenByTracking = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var COD_TRACKING, OrdenTracking;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            COD_TRACKING = req.params.COD_TRACKING;
            _context2.prev = 1;
            _context2.next = 4;
            return _DE_orden.DE_ORDEN.findOne({
              where: {
                COD_TRACKING: COD_TRACKING
              }
            });

          case 4:
            OrdenTracking = _context2.sent;

            if (Boolean(JSON.stringify(OrdenTracking.COD_ORDEN))) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              ok: false,
              OrdenTracking: false
            }));

          case 7:
            return _context2.abrupt("return", res.status(200).json(OrdenTracking));

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

  return function GetOrdenByTracking(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetOrdenByTracking = GetOrdenByTracking;

var GetOrdenByNumberTracking = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var NUM_TRACKING, OrdenTracking;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            NUM_TRACKING = req.params.NUM_TRACKING;
            console.log(NUM_TRACKING);
            _context3.prev = 2;
            _context3.next = 5;
            return _index["default"].query("CALL SHOW_ORDEN_NUMBER_TRACKIN(:NUM_TRACKING)", {
              replacements: {
                NUM_TRACKING: NUM_TRACKING
              }
            });

          case 5:
            OrdenTracking = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(OrdenTracking));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));

  return function GetOrdenByNumberTracking(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.GetOrdenByNumberTracking = GetOrdenByNumberTracking;
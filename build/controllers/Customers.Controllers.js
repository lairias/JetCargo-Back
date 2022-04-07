"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCustomers = void 0;

var _index = _interopRequireDefault(require("../config/database/index"));

var _handleError = require("../helpers/handleError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetCustomers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var customers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].query("CALL SHOW_CUSTOMERS()");

          case 3:
            customers = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              ok: true,
              customers: customers
            }));

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

  return function GetCustomers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetCustomers = GetCustomers;
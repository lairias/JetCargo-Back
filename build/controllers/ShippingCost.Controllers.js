"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateShippingCost = exports.GetShippingCosts = exports.GetShippingCost = exports.DeleteShippingCost = exports.CreateShippingCost = void 0;

var _Pa_typeUsers = require("../models/Pa_typeUsers");

var _handleError = require("../helpers/handleError");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetShippingCost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {} catch (error) {
              (0, _handleError.HttpError)(res, error);
              next();
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetShippingCost(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetShippingCost = GetShippingCost;

var GetShippingCosts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Pa_typeUsers.PA_TypeUsers.findAll();

          case 3:
            return _context2.abrupt("return", res.status(200).json());

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            (0, _handleError.HttpError)(res, _context2.t0);
            next();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function GetShippingCosts(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetShippingCosts = GetShippingCosts;

var UpdateShippingCost = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {} catch (error) {
              (0, _handleError.HttpError)(res, error);
              next();
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function UpdateShippingCost(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpdateShippingCost = UpdateShippingCost;

var DeleteShippingCost = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {} catch (error) {
              (0, _handleError.HttpError)(res, error);
              next();
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function DeleteShippingCost(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteShippingCost = DeleteShippingCost;

var CreateShippingCost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            try {} catch (error) {
              (0, _handleError.HttpError)(res, error);
              next();
            }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function CreateShippingCost(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.CreateShippingCost = CreateShippingCost;
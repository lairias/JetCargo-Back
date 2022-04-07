"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTypePackage = exports.GetTypePackages = exports.GetTypePackage = exports.DeleteTypePackage = exports.CreateTypePackage = void 0;

var _BO_typePackage = require("../models/BO_typePackage");

var _index = _interopRequireDefault(require("../config/database/index"));

var _handleError = require("../helpers/handleError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetTypePackages = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var typePackage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _BO_typePackage.BO_TYPEPACKAGE.findAll();

          case 3:
            typePackage = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              ok: true,
              typePackage: typePackage
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

  return function GetTypePackages(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetTypePackages = GetTypePackages;

var GetTypePackage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var COD_TYPEPACKAGE, cities;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            COD_TYPEPACKAGE = req.params.COD_TYPEPACKAGE;
            _context2.prev = 1;
            _context2.next = 4;
            return _BO_typePackage.BO_TYPEPACKAGE.findByPk(COD_TYPEPACKAGE);

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

  return function GetTypePackage(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetTypePackage = GetTypePackage;

var CreateTypePackage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, NAM_TYPEPACKAGE, DES_TYPEPACKAGE, USR_ADD, cities;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, NAM_TYPEPACKAGE = _req$body.NAM_TYPEPACKAGE, DES_TYPEPACKAGE = _req$body.DES_TYPEPACKAGE, USR_ADD = _req$body.USR_ADD;
            _context3.prev = 1;
            _context3.next = 4;
            return _index["default"].query("CALL INS_TYPEPACKAGE(:NAM_TYPEPACKAGE,:DES_TYPEPACKAGE,:USR_ADD)", {
              replacements: {
                NAM_TYPEPACKAGE: NAM_TYPEPACKAGE,
                DES_TYPEPACKAGE: DES_TYPEPACKAGE,
                USR_ADD: USR_ADD
              }
            })["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            cities = _context3.sent;
            return _context3.abrupt("return", res.sendStatus(200));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function CreateTypePackage(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.CreateTypePackage = CreateTypePackage;

var DeleteTypePackage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var COD_TYPEPACKAGE;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            COD_TYPEPACKAGE = req.params.COD_TYPEPACKAGE;
            _context4.prev = 1;
            _context4.next = 4;
            return _BO_typePackage.BO_TYPEPACKAGE.destroy({
              where: {
                COD_TYPEPACKAGE: COD_TYPEPACKAGE
              }
            });

          case 4:
            return _context4.abrupt("return", res.sendStatus(200));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            (0, _handleError.HttpError)(res, _context4.t0);
            next();

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));

  return function DeleteTypePackage(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteTypePackage = DeleteTypePackage;

var UpdateTypePackage = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body2, NAM_TYPEPACKAGE, DES_TYPEPACKAGE, USR_UPD, COD_TYPEPACKAGE;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, NAM_TYPEPACKAGE = _req$body2.NAM_TYPEPACKAGE, DES_TYPEPACKAGE = _req$body2.DES_TYPEPACKAGE, USR_UPD = _req$body2.USR_UPD;
            COD_TYPEPACKAGE = req.params.COD_TYPEPACKAGE;
            _context5.prev = 2;
            _context5.next = 5;
            return _index["default"].query("CALL UPD_TYPEPACKAGE(:COD_TYPEPACKAGE,:NAM_TYPEPACKAGE,:DES_TYPEPACKAGE,:USR_UPD)", {
              replacements: {
                COD_TYPEPACKAGE: COD_TYPEPACKAGE,
                NAM_TYPEPACKAGE: NAM_TYPEPACKAGE,
                DES_TYPEPACKAGE: DES_TYPEPACKAGE,
                USR_UPD: USR_UPD
              }
            })["catch"](function (error) {
              console.log(error);
              (0, _handleError.HttpError)(res, error);
              throw res.sendStatus(500);
            });

          case 5:
            return _context5.abrupt("return", res.sendStatus(200));

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](2);
            (0, _handleError.HttpError)(res, _context5.t0);
            next();

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 8]]);
  }));

  return function UpdateTypePackage(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.UpdateTypePackage = UpdateTypePackage;
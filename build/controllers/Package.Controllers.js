"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/BO_package"),
    BO_PACKAGE = _require.BO_PACKAGE;

var sequelize = require("../config/database/index");

var _require2 = require("../helpers/handleError"),
    HttpError = _require2.HttpError;

exports.GetPackages = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var cities;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return BO_PACKAGE.findAll();

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

exports.GetPackageLokerByCustomer = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$params, COD_CUSTOMER, COD_LOCKER, packageLokerCustomer;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, COD_CUSTOMER = _req$params.COD_CUSTOMER, COD_LOCKER = _req$params.COD_LOCKER;
            console.log(req.params);
            _context2.prev = 2;
            _context2.next = 5;
            return sequelize.query("CALL SHOW_PACKAGE_CUSTOMER(:COD_CUSTOMER,:COD_LOCKER)", {
              replacements: {
                COD_CUSTOMER: COD_CUSTOMER,
                COD_LOCKER: COD_LOCKER
              }
            });

          case 5:
            packageLokerCustomer = _context2.sent;

            if (JSON.stringify(packageLokerCustomer[0])) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              ok: false,
              packageLokerCustomer: false
            }));

          case 8:
            return _context2.abrupt("return", res.status(200).json({
              ok: true,
              packageLokerCustomer: packageLokerCustomer
            }));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);
            HttpError(res, _context2.t0);
            next();

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 11]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetPackage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var COD_PACKAGE, cities;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            COD_PACKAGE = req.params.COD_PACKAGE;
            _context3.prev = 1;
            _context3.next = 4;
            return BO_PACKAGE.findByPk(COD_PACKAGE);

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

exports.CreatePackage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body, COD_CATPACKAGE, COD_TYPEPACKAGE, COD_LOCKER, NOM_PACKAGE, NUM_PACKAGE, HEIGHT_PACKAGE, WIDTH_PACKAGE, LENGTH_PACKAGE, WEIGHT_PACKAGE, PRICE_PACKAGE, VOL_PACKAGE, USR_ADD;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, COD_CATPACKAGE = _req$body.COD_CATPACKAGE, COD_TYPEPACKAGE = _req$body.COD_TYPEPACKAGE, COD_LOCKER = _req$body.COD_LOCKER, NOM_PACKAGE = _req$body.NOM_PACKAGE, NUM_PACKAGE = _req$body.NUM_PACKAGE, HEIGHT_PACKAGE = _req$body.HEIGHT_PACKAGE, WIDTH_PACKAGE = _req$body.WIDTH_PACKAGE, LENGTH_PACKAGE = _req$body.LENGTH_PACKAGE, WEIGHT_PACKAGE = _req$body.WEIGHT_PACKAGE, PRICE_PACKAGE = _req$body.PRICE_PACKAGE, VOL_PACKAGE = _req$body.VOL_PACKAGE, USR_ADD = _req$body.USR_ADD;
            _context4.prev = 1;
            _context4.next = 4;
            return sequelize.query("CALL INS_PACKAGE(:COD_CATPACKAGE,:COD_TYPEPACKAGE,:COD_LOCKER,:NOM_PACKAGE,:NUM_PACKAGE,:HEIGHT_PACKAGE,:WIDTH_PACKAGE,:LENGTH_PACKAGE,:WEIGHT_PACKAGE,:PRICE_PACKAGE,:VOL_PACKAGE,:USR_ADD)", {
              replacements: {
                COD_CATPACKAGE: COD_CATPACKAGE,
                COD_TYPEPACKAGE: COD_TYPEPACKAGE,
                COD_LOCKER: COD_LOCKER,
                NOM_PACKAGE: NOM_PACKAGE,
                NUM_PACKAGE: NUM_PACKAGE,
                HEIGHT_PACKAGE: HEIGHT_PACKAGE,
                WIDTH_PACKAGE: WIDTH_PACKAGE,
                LENGTH_PACKAGE: LENGTH_PACKAGE,
                WEIGHT_PACKAGE: WEIGHT_PACKAGE,
                PRICE_PACKAGE: PRICE_PACKAGE,
                VOL_PACKAGE: VOL_PACKAGE,
                USR_ADD: USR_ADD
              }
            })["catch"](function (error) {
              console.log(error);
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 4:
            return _context4.abrupt("return", res.sendStatus(200));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            HttpError(res, _context4.t0);
            next();

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeletePackage = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var COD_PACKAGE;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            COD_PACKAGE = req.params.COD_PACKAGE;
            _context5.prev = 1;
            _context5.next = 4;
            return BO_PACKAGE.destroy({
              where: {
                COD_PACKAGE: COD_PACKAGE
              }
            });

          case 4:
            return _context5.abrupt("return", res.sendStatus(200));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            HttpError(res, _context5.t0);
            next();

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.UpdatePackage = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var _req$body2, COD_CATPACKAGE, COD_TYPEPACKAGE, COD_LOCKER, NOM_PACKAGE, NUM_PACKAGE, HEIGHT_PACKAGE, WIDTH_PACKAGE, LENGTH_PACKAGE, WEIGHT_PACKAGE, PRICE_PACKAGE, VOL_PACKAGE, IND_PACKAGE, USR_UPD, COD_PACKAGE;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, COD_CATPACKAGE = _req$body2.COD_CATPACKAGE, COD_TYPEPACKAGE = _req$body2.COD_TYPEPACKAGE, COD_LOCKER = _req$body2.COD_LOCKER, NOM_PACKAGE = _req$body2.NOM_PACKAGE, NUM_PACKAGE = _req$body2.NUM_PACKAGE, HEIGHT_PACKAGE = _req$body2.HEIGHT_PACKAGE, WIDTH_PACKAGE = _req$body2.WIDTH_PACKAGE, LENGTH_PACKAGE = _req$body2.LENGTH_PACKAGE, WEIGHT_PACKAGE = _req$body2.WEIGHT_PACKAGE, PRICE_PACKAGE = _req$body2.PRICE_PACKAGE, VOL_PACKAGE = _req$body2.VOL_PACKAGE, IND_PACKAGE = _req$body2.IND_PACKAGE, USR_UPD = _req$body2.USR_UPD;
            COD_PACKAGE = req.params.COD_PACKAGE;
            _context6.prev = 2;
            _context6.next = 5;
            return sequelize.query("CALL UPD_PACKAGE(:COD_PACKAGE,:COD_CATPACKAGE,:COD_TYPEPACKAGE,:COD_LOCKER,:NOM_PACKAGE,:NUM_PACKAGE,:HEIGHT_PACKAGE,:WIDTH_PACKAGE,:LENGTH_PACKAGE,:WEIGHT_PACKAGE,:PRICE_PACKAGE,:VOL_PACKAGE,:IND_PACKAGE,:USR_UPD)", {
              replacements: {
                COD_PACKAGE: COD_PACKAGE,
                COD_CATPACKAGE: COD_CATPACKAGE,
                COD_TYPEPACKAGE: COD_TYPEPACKAGE,
                COD_LOCKER: COD_LOCKER,
                NOM_PACKAGE: NOM_PACKAGE,
                NUM_PACKAGE: NUM_PACKAGE,
                HEIGHT_PACKAGE: HEIGHT_PACKAGE,
                WIDTH_PACKAGE: WIDTH_PACKAGE,
                LENGTH_PACKAGE: LENGTH_PACKAGE,
                WEIGHT_PACKAGE: WEIGHT_PACKAGE,
                PRICE_PACKAGE: PRICE_PACKAGE,
                VOL_PACKAGE: VOL_PACKAGE,
                IND_PACKAGE: IND_PACKAGE,
                USR_UPD: USR_UPD
              }
            })["catch"](function (error) {
              console.log(error);
              HttpError(res, error);
              throw res.sendStatus(500);
            });

          case 5:
            return _context6.abrupt("return", res.sendStatus(200));

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](2);
            HttpError(res, _context6.t0);
            next();

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 8]]);
  }));

  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
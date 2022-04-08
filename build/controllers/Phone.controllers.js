"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sequelize = require("../config/database");

var _require = require("../helpers/handleError"),
    HttpError = _require.HttpError;

exports.GetPhoneLocker = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_LOCKER, PhoneLocker;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_LOCKER = req.params.COD_LOCKER;
            _context.prev = 1;
            _context.next = 4;
            return sequelize.query("CALL SHOW_PHONE_LOCKER(:COD_LOCKER)", {
              replacements: {
                COD_LOCKER: COD_LOCKER
              }
            });

          case 4:
            PhoneLocker = _context.sent;
            return _context.abrupt("return", res.status(200).json(PhoneLocker));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            HttpError(res, _context.t0);
            next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
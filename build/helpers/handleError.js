"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/LOG_Errores"),
    LOG_ERROR = _require.LOG_ERROR;

var HttpError = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res, error) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return LOG_ERROR.create({
              DES_ERROR: "".concat(error),
              HTTP_ERROR: "".concat(res.req.method, " /  ").concat(res.req.baseUrl),
              STATUS_ERROR: "Error al momento de procesar la peticion - HTTP error 501 "
            });

          case 2:
            return _context.abrupt("return");

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function HttpError(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  HttpError: HttpError
};
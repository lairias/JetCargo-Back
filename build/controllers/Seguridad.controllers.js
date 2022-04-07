"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetSeguridadID = void 0;

var _handleError = require("../helpers/handleError");

var _Se_seguridad = require("../models/security/Se_seguridad");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetSeguridadID = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_SEGURIDAD, permiso;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_SEGURIDAD = req.params.COD_SEGURIDAD;
            _context.prev = 1;
            _context.next = 4;
            return _Se_seguridad.SE_SEGURIDAD.findByPk(COD_SEGURIDAD);

          case 4:
            permiso = _context.sent;
            return _context.abrupt("return", res.status(200).json(permiso));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            (0, _handleError.HttpError)(res, _context.t0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function GetSeguridadID(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetSeguridadID = GetSeguridadID;
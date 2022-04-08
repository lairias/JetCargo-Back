"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatosInicioCoreo = DatosInicioCoreo;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/security/Se_seguridad"),
    SE_SEGURIDAD = _require.SE_SEGURIDAD;

function DatosInicioCoreo(_x) {
  return _DatosInicioCoreo.apply(this, arguments);
}

function _DatosInicioCoreo() {
  _DatosInicioCoreo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(COD_SEGURIDAD) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return SE_SEGURIDAD.findByPk(COD_SEGURIDAD);

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data.DATO_SEGURIDAD);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _DatosInicioCoreo.apply(this, arguments);
}
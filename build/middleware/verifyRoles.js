"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/Pa_typeUsers"),
    PA_TypeUsers = _require.PA_TypeUsers;

var verifyRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var NOM_TYPE;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            NOM_TYPE = req.body.NOM_TYPE;
            _context.prev = 1;
            _context.next = 4;
            return PA_TypeUsers.findOne({
              where: {
                NOM_TYPE: NOM_TYPE
              }
            });

          case 4:
            if (!_context.sent) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Nombre de rol no disponible"
            }));

          case 6:
            next();
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(501).json({
              message: "Erro al procesar la petición"
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function verifyRoles(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  verifyRoles: verifyRoles
};
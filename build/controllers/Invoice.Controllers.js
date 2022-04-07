"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetInformationInvoceByCustomer = void 0;

var _Users = require("../models/Users");

var _index = _interopRequireDefault(require("../config/database/index"));

var _handleError = require("../helpers/handleError");

var _Pa_people = require("../models/Pa_people");

var _REL_people_addres = require("../models/relations/REL_people_addres");

var _Pa_phones = require("../models/Pa_phones");

var _REL_people_phone = require("../models/relations/REL_people_phone");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetInformationInvoceByCustomer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_USER, User, people, Reldireccion, direccion, RelPhone, Phone;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_USER = req.params.COD_USER;
            _context.prev = 1;
            _context.next = 4;
            return _Users.USERS.findOne({
              where: {
                COD_USER: COD_USER
              }
            });

          case 4:
            User = _context.sent;

            if (User) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Usuario no encontrado"
            }));

          case 7:
            _context.next = 9;
            return _Pa_people.PA_POEPLE.findOne({
              where: {
                COD_PEOPLE: User.COD_PEOPLE
              }
            });

          case 9:
            people = _context.sent;

            if (people) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "Usuario no encontrado"
            }));

          case 12:
            _context.next = 14;
            return _REL_people_addres.REL_PEOPLE_ADDRES.findOne({
              where: {
                COD_PEOPLE: people.COD_PEOPLE
              }
            });

          case 14:
            Reldireccion = _context.sent;
            _context.next = 17;
            return _index["default"].query("CALL SHO_ADDRES_BY_CUSTOMER(:COD_ADDRESS)", {
              replacements: {
                COD_ADDRESS: Reldireccion.COD_ADDRESS
              }
            });

          case 17:
            direccion = _context.sent;
            _context.next = 20;
            return _REL_people_phone.REL_PEOPLE_PHONE.findOne({
              where: {
                COD_PEOPLE: people.COD_PEOPLE
              }
            });

          case 20:
            RelPhone = _context.sent;
            _context.next = 23;
            return _Pa_phones.PA_PHONES.findOne({
              where: {
                COD_PHONE: RelPhone.COD_PHONE
              }
            });

          case 23:
            Phone = _context.sent;
            res.status(200).json({
              ok: true,
              people: people,
              User: User,
              Phone: Phone,
              direccion: direccion
            });
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](1);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 27]]);
  }));

  return function GetInformationInvoceByCustomer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetInformationInvoceByCustomer = GetInformationInvoceByCustomer;
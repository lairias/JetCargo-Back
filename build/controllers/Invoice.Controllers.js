"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("../models/Users"),
    USERS = _require.USERS;

var sequelize = require("../config/database/index");

var _require2 = require("../helpers/handleError"),
    HttpError = _require2.HttpError;

var _require3 = require("../models/Pa_people"),
    PA_POEPLE = _require3.PA_POEPLE;

var _require4 = require("../models/relations/REL_people_addres"),
    REL_PEOPLE_ADDRES = _require4.REL_PEOPLE_ADDRES;

var _require5 = require("../models/Pa_phones"),
    PA_PHONES = _require5.PA_PHONES;

var _require6 = require("../models/relations/REL_people_phone"),
    REL_PEOPLE_PHONE = _require6.REL_PEOPLE_PHONE;

exports.GetInformationInvoceByCustomer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_USER, User, people, Reldireccion, direccion, RelPhone, Phone;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_USER = req.params.COD_USER;
            _context.prev = 1;
            _context.next = 4;
            return USERS.findOne({
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
            return PA_POEPLE.findOne({
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
            return REL_PEOPLE_ADDRES.findOne({
              where: {
                COD_PEOPLE: people.COD_PEOPLE
              }
            });

          case 14:
            Reldireccion = _context.sent;
            _context.next = 17;
            return sequelize.query("CALL SHO_ADDRES_BY_CUSTOMER(:COD_ADDRESS)", {
              replacements: {
                COD_ADDRESS: Reldireccion.COD_ADDRESS
              }
            });

          case 17:
            direccion = _context.sent;
            _context.next = 20;
            return REL_PEOPLE_PHONE.findOne({
              where: {
                COD_PEOPLE: people.COD_PEOPLE
              }
            });

          case 20:
            RelPhone = _context.sent;
            _context.next = 23;
            return PA_PHONES.findOne({
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
            HttpError(res, _context.t0);
            next();

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 27]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUser = exports.GetUsers = exports.GetUser = exports.DeleteUser = exports.CreateUser = void 0;

var _Users = require("../models/Users");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {} catch (error) {
              console.log(error);
              res.status(404).json({
                message: "Error al momento de procesar la peticion "
              });
              next();
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetUser = GetUser;

var GetUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Users.USERS.sequelize.query("CALL  SHOW_USERS");

          case 3:
            users = _context2.sent;
            res.status(200).json(users);
            _context2.next = 12;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(404).json({
              message: "Error al momento de procesar la peticion "
            });
            next();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function GetUsers(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetUsers = GetUsers;

var UpdateUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {} catch (error) {
              console.log(error);
              res.status(404).json({
                message: "Error al momento de procesar la peticion "
              });
              next();
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function UpdateUser(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpdateUser = UpdateUser;

var DeleteUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {} catch (error) {
              console.log(error);
              res.status(404).json({
                message: "Error al momento de procesar la peticion "
              });
              next();
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function DeleteUser(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteUser = DeleteUser;

var CreateUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            try {} catch (error) {
              console.log(error);
              res.status(404).json({
                message: "Error al momento de procesar la peticion "
              });
              next();
            }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function CreateUser(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.CreateUser = CreateUser;
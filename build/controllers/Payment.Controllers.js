"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOrden = exports.CaptureOrden = exports.CancelCreateOrden = void 0;

var _BO_typePackage = require("../models/BO_typePackage");

var _handleError = require("../helpers/handleError");

var _uuid = require("uuid");

var _config = require("../config/database/Paypal/config");

var _axios = _interopRequireDefault(require("axios"));

require("dotenv/config");

var _DE_orden = require("../models/DE_orden");

var _BO_package = require("../models/BO_package");

var _BO_tracking = require("../models/BO_tracking");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateOrden = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, mensaje, DataTrackinNotOrden, orden, params, _yield$axios$post, access_token, _yield$axios$post2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, mensaje = _req$body.mensaje, DataTrackinNotOrden = _req$body.DataTrackinNotOrden;
            _context.prev = 1;
            orden = {
              intent: "CAPTURE",
              purchase_units: [{
                amount: {
                  value: parseFloat(DataTrackinNotOrden[0].PRICE_PACKAGE),
                  currency_code: "USD"
                },
                description: mensaje
              }],
              application_context: {
                brand_name: "Jetcargo.vip",
                landing_page: "LOGIN",
                shipping_preference: "GET_FROM_FILE",
                user_action: "PAY_NOW",
                return_url: "".concat(process.env.API_BACK, ":").concat(process.env.PORT, "/api/payment/capture-orden/").concat(DataTrackinNotOrden[0].COD_CUSTOMER, "/").concat(DataTrackinNotOrden[0].COD_TRACKING, "/").concat(DataTrackinNotOrden[0].COD_PACKAGE),
                cancel_url: "http://localhost:3000/payment/cancel"
              }
            };
            params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            _context.next = 7;
            return _axios["default"].post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              auth: {
                username: _config.PAPAL_API_CLIENTE,
                password: _config.PAPAL_API_SECRET
              }
            });

          case 7:
            _yield$axios$post = _context.sent;
            access_token = _yield$axios$post.data.access_token;
            _context.next = 11;
            return _axios["default"].post("".concat(_config.PAPAL_API, "/v2/checkout/orders"), orden, {
              headers: {
                Authorization: "Bearer ".concat(access_token)
              }
            });

          case 11:
            _yield$axios$post2 = _context.sent;
            data = _yield$axios$post2.data;
            res.json(data);
            _context.next = 21;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 16]]);
  }));

  return function CreateOrden(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.CreateOrden = CreateOrden;

var CaptureOrden = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$params, COD_CUSTOMER, COD_TRACKING, COD_PACKAGE, _req$query, token, PayerID, params, _yield$axios$post3, access_token, respuesta, tracking, boPackage;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$params = req.params, COD_CUSTOMER = _req$params.COD_CUSTOMER, COD_TRACKING = _req$params.COD_TRACKING, COD_PACKAGE = _req$params.COD_PACKAGE;
            _req$query = req.query, token = _req$query.token, PayerID = _req$query.PayerID;

            if (COD_CUSTOMER) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.redirect("".concat(process.env.API_BACK, ":").concat(process.env.PORT)));

          case 5:
            if (COD_TRACKING) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.redirect("".concat(process.env.API_BACK, ":").concat(process.env.PORT)));

          case 7:
            if (COD_PACKAGE) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.redirect("".concat(process.env.API_BACK, ":").concat(process.env.PORT)));

          case 9:
            if (token) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.redirect("".concat(process.env.API_BACK, ":").concat(process.env.PORT)));

          case 11:
            if (PayerID) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.redirect("".concat(process.env.API_BACK, ":").concat(process.env.PORT)));

          case 13:
            params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            _context2.next = 17;
            return _axios["default"].post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              auth: {
                username: _config.PAPAL_API_CLIENTE,
                password: _config.PAPAL_API_SECRET
              }
            });

          case 17:
            _yield$axios$post3 = _context2.sent;
            access_token = _yield$axios$post3.data.access_token;
            _context2.next = 21;
            return _axios["default"].post("".concat(_config.PAPAL_API, "/v2/checkout/orders/").concat(token, "/capture"), {}, {
              headers: {
                Authorization: "Bearer ".concat(access_token)
              }
            });

          case 21:
            respuesta = _context2.sent;
            _context2.next = 24;
            return _DE_orden.DE_ORDEN.create({
              COD_TRACKING: COD_TRACKING,
              NUM_ORDEN: (0, _uuid.v4)(),
              CHECKPOINT_STATUS: "IN_PROGRESS"
            });

          case 24:
            _context2.next = 26;
            return _BO_tracking.BO_TRACKING.findOne({
              where: {
                COD_TRACKING: COD_TRACKING
              }
            });

          case 26:
            tracking = _context2.sent;
            _context2.next = 29;
            return _BO_tracking.BO_TRACKING.update({
              RECEIVED_TRACKING: "IN_PROGRESS"
            }, {
              where: {
                COD_TRACKING: COD_TRACKING
              }
            });

          case 29:
            _context2.next = 31;
            return _BO_package.BO_PACKAGE.update({
              PAYMENT_CANCELLED: true
            }, {
              where: {
                COD_PACKAGE: COD_PACKAGE
              }
            });

          case 31:
            boPackage = _context2.sent;
            return _context2.abrupt("return", res.redirect("".concat(process.env.API_FROND, ":").concat(process.env.PORT_FROND, "/admin/locker/").concat(tracking.NUM_TRACKING)));

          case 35:
            _context2.prev = 35;
            _context2.t0 = _context2["catch"](0);
            (0, _handleError.HttpError)(res, _context2.t0);
            next();

          case 39:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 35]]);
  }));

  return function CaptureOrden(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CaptureOrden = CaptureOrden;

var CancelCreateOrden = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var typePackage;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _BO_typePackage.BO_TYPEPACKAGE.findAll();

          case 3:
            typePackage = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              ok: true,
              typePackage: typePackage
            }));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function CancelCreateOrden(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.CancelCreateOrden = CancelCreateOrden;
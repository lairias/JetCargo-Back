"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTrackingInformation = exports.OrigenGetTrackinOne = exports.GetTrackinInformationOrigen = exports.GetTrackinInformationOrden = exports.GetTrackinInformationDestinoOrigenAll = exports.GetTrackinInformationDestino = exports.GetOrigenDestinoAllTrackingAdministrador = exports.GetOrigenDestinoAllTracking = exports.DestinoGetTrackinOne = exports.CreateTrackingInformation = void 0;

var _index = _interopRequireDefault(require("../config/database/index"));

var _handleError = require("../helpers/handleError");

var _DE_trackingInformationOrigin = require("../models/DE_trackingInformationOrigin");

var _DE_trackingInformationDestino = require("../models/DE_trackingInformationDestino");

var _REL_Origin_Destino = require("../models/relations/REL_Origin_Destino");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DestinoGetTrackinOne = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var COD_DESTINO, Origen;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            COD_DESTINO = req.params.COD_DESTINO;
            _context.prev = 1;
            _context.next = 4;
            return _index["default"].query("CALL SHOW_INFORMATION_TRACKIN_DESTINO_BY_ID(:COD_DESTINO)", {
              replacements: {
                COD_DESTINO: COD_DESTINO
              }
            });

          case 4:
            Origen = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              Origen: Origen
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            (0, _handleError.HttpError)(res, _context.t0);
            next();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function DestinoGetTrackinOne(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.DestinoGetTrackinOne = DestinoGetTrackinOne;

var OrigenGetTrackinOne = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var COD_INICIO, Origen;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            COD_INICIO = req.params.COD_INICIO;
            _context2.prev = 1;
            _context2.next = 4;
            return _index["default"].query("CALL SHOW_INFORMATION_TRACKIN_ORIGIN_BY_ID(:COD_INICIO)", {
              replacements: {
                COD_INICIO: COD_INICIO
              }
            });

          case 4:
            Origen = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              Origen: Origen
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            (0, _handleError.HttpError)(res, _context2.t0);
            next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function OrigenGetTrackinOne(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.OrigenGetTrackinOne = OrigenGetTrackinOne;

var CreateTrackingInformation = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, Direcciones, COD_ORDEN, Origen, Destino;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, Direcciones = _req$body.Direcciones, COD_ORDEN = _req$body.COD_ORDEN;
            _context3.prev = 1;
            _context3.next = 4;
            return _DE_trackingInformationOrigin.DE_TRACKING_INFORMATION_ORIGEN.create({
              COD_ORDEN: COD_ORDEN,
              COD_ORIGIN_COUNTRY: Direcciones.COD_COUNTRY_ORIGIN,
              COD_ORIGIN_STATE: Direcciones.COD_STATE_ORIGIN,
              COD_ORIGIN_CITY: Direcciones.COD_CITY_ORIGIN,
              CHECKPOINT_DELIVERY_STATUS: "DELIVERED"
            });

          case 4:
            Origen = _context3.sent;
            _context3.next = 7;
            return _DE_trackingInformationDestino.DE_TRACKING_INFORMATION_DESTINO.create({
              COD_ORDEN: COD_ORDEN,
              COD_DESTINATION_COUNTRY: Direcciones.COD_COUNTRY_DESTINO,
              COD_DESTINATION_STATE: Direcciones.COD_STATE_DESTINO,
              COD_DESTINATION_CITY: Direcciones.COD_CITY_DESTINO,
              CHECKPOINT_DELIVERY_STATUS: "PENDING"
            });

          case 7:
            Destino = _context3.sent;
            _context3.next = 10;
            return _REL_Origin_Destino.REL_ORIGIN_DESTINO.create({
              COD_ORDEN: COD_ORDEN,
              COD_DESTINO: Destino.dataValues.COD_TRACKINFORMATION_DESTINO,
              COD_ORIGIN: Origen.dataValues.COD_TRACKINFORMATION_ORIGIN
            });

          case 10:
            return _context3.abrupt("return", res.status(200).json({
              ok: true
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            (0, _handleError.HttpError)(res, _context3.t0);
            next();

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 13]]);
  }));

  return function CreateTrackingInformation(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.CreateTrackingInformation = CreateTrackingInformation;

var UpdateTrackingInformation = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body2, PaisOrigin, PaisDestino, StateOrigin, StateDestino, CityOrigin, CityDestino, COD_ORDEN, STATUS_ORIGIN, STATUS_DESTINO, Origen, Destino;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, PaisOrigin = _req$body2.PaisOrigin, PaisDestino = _req$body2.PaisDestino, StateOrigin = _req$body2.StateOrigin, StateDestino = _req$body2.StateDestino, CityOrigin = _req$body2.CityOrigin, CityDestino = _req$body2.CityDestino, COD_ORDEN = _req$body2.COD_ORDEN, STATUS_ORIGIN = _req$body2.STATUS_ORIGIN, STATUS_DESTINO = _req$body2.STATUS_DESTINO;
            console.log(req.body);
            _context4.prev = 2;
            _context4.next = 5;
            return _DE_trackingInformationOrigin.DE_TRACKING_INFORMATION_ORIGEN.update({
              COD_ORDEN: COD_ORDEN,
              COD_ORIGIN_COUNTRY: parseInt(PaisOrigin),
              COD_ORIGIN_STATE: parseInt(StateOrigin),
              COD_ORIGIN_CITY: parseInt(CityOrigin),
              CHECKPOINT_DELIVERY_STATUS: STATUS_ORIGIN
            }, {
              where: {
                COD_ORDEN: COD_ORDEN
              }
            });

          case 5:
            Origen = _context4.sent;
            _context4.next = 8;
            return _DE_trackingInformationDestino.DE_TRACKING_INFORMATION_DESTINO.create({
              COD_ORDEN: COD_ORDEN,
              COD_DESTINATION_COUNTRY: parseInt(PaisDestino),
              COD_DESTINATION_STATE: parseInt(StateDestino),
              COD_DESTINATION_CITY: parseInt(CityDestino),
              CHECKPOINT_DELIVERY_STATUS: STATUS_DESTINO
            });

          case 8:
            Destino = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              ok: true
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            (0, _handleError.HttpError)(res, _context4.t0);
            next();

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));

  return function UpdateTrackingInformation(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.UpdateTrackingInformation = UpdateTrackingInformation;

var GetTrackinInformationOrden = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var COD_ORDEN;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            COD_ORDEN = req.params.COD_ORDEN; // try {
            //   const TrackinInformationOrden = await DE_TRACKING_INFORMATION_DESTINO.findOne({
            //   });
            //   if (TrackinInformationOrden === null)
            //     return res
            //       .status(203)
            //       .json({ ok: false, TrackinInformationOrden: false });
            //   return res.status(200).json({ ok: true, TrackinInformationOrden });
            // } catch (error) {
            //   HttpError(res, error);
            //   next();
            // }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function GetTrackinInformationOrden(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.GetTrackinInformationOrden = GetTrackinInformationOrden;

var GetOrigenDestinoAllTracking = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var COD_ORDEN, OrriginDestino;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            COD_ORDEN = req.params.COD_ORDEN;
            _context6.prev = 1;
            _context6.next = 4;
            return _REL_Origin_Destino.REL_ORIGIN_DESTINO.findOne({
              where: {
                COD_ORDEN: COD_ORDEN
              }
            });

          case 4:
            OrriginDestino = _context6.sent;

            if (!(OrriginDestino === null)) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(203).json({
              ok: false,
              OrriginDestino: false
            }));

          case 7:
            return _context6.abrupt("return", res.status(200).json({
              ok: true,
              OrriginDestino: OrriginDestino
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](1);
            (0, _handleError.HttpError)(res, _context6.t0);
            next();

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 10]]);
  }));

  return function GetOrigenDestinoAllTracking(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.GetOrigenDestinoAllTracking = GetOrigenDestinoAllTracking;

var GetOrigenDestinoAllTrackingAdministrador = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
    var COD_ORDEN, OrigenDestino;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            COD_ORDEN = req.params.COD_ORDEN;
            _context7.prev = 1;
            _context7.next = 4;
            return _index["default"].query("CALL SHOW_ORIGEN_DESTINO_ORDEN_ALL(:COD_ORDEN)", {
              replacements: {
                COD_ORDEN: COD_ORDEN
              }
            });

          case 4:
            OrigenDestino = _context7.sent;

            if (!(OrigenDestino === null)) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(203).json({
              ok: false,
              OrigenDestino: false
            }));

          case 7:
            return _context7.abrupt("return", res.status(200).json({
              ok: true,
              OrigenDestino: OrigenDestino
            }));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](1);
            (0, _handleError.HttpError)(res, _context7.t0);
            next();

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 10]]);
  }));

  return function GetOrigenDestinoAllTrackingAdministrador(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.GetOrigenDestinoAllTrackingAdministrador = GetOrigenDestinoAllTrackingAdministrador;

var GetTrackinInformationOrigen = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res, next) {
    var COD_ORDEN, OrigenOrden;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            COD_ORDEN = req.params.COD_ORDEN;
            _context8.prev = 1;
            _context8.next = 4;
            return _index["default"].query("CALL SHOW_ORIGEN_ORDEN(:COD_ORDEN)", {
              replacements: {
                COD_ORDEN: COD_ORDEN
              }
            });

          case 4:
            OrigenOrden = _context8.sent;

            if (!(OrigenOrden === null)) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", res.status(203).json({
              ok: false,
              OrigenOrden: false
            }));

          case 7:
            return _context8.abrupt("return", res.status(200).json({
              ok: true,
              OrigenOrden: OrigenOrden
            }));

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](1);
            (0, _handleError.HttpError)(res, _context8.t0);
            next();

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 10]]);
  }));

  return function GetTrackinInformationOrigen(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.GetTrackinInformationOrigen = GetTrackinInformationOrigen;

var GetTrackinInformationDestino = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res, next) {
    var COD_ORDEN, DestinoOrden;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            COD_ORDEN = req.params.COD_ORDEN;
            _context9.prev = 1;
            _context9.next = 4;
            return _index["default"].query("CALL SHOW_DESTINO_ORDEN(:COD_ORDEN)", {
              replacements: {
                COD_ORDEN: COD_ORDEN
              }
            });

          case 4:
            DestinoOrden = _context9.sent;

            if (!(DestinoOrden === null)) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt("return", res.status(203).json({
              ok: false,
              DestinoOrden: false
            }));

          case 7:
            return _context9.abrupt("return", res.status(200).json({
              ok: true,
              DestinoOrden: DestinoOrden
            }));

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](1);
            (0, _handleError.HttpError)(res, _context9.t0);
            next();

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 10]]);
  }));

  return function GetTrackinInformationDestino(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.GetTrackinInformationDestino = GetTrackinInformationDestino;

var GetTrackinInformationDestinoOrigenAll = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res, next) {
    var COD_ORDEN, OrigenDestino;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            COD_ORDEN = req.params.COD_ORDEN;
            _context10.prev = 1;
            _context10.next = 4;
            return _index["default"].query("CALL SHOW_ORIGEN_DESTINO_ORDEN_ALL(:COD_ORDEN)", {
              replacements: {
                COD_ORDEN: COD_ORDEN
              }
            });

          case 4:
            OrigenDestino = _context10.sent;

            if (!(OrigenDestino === null)) {
              _context10.next = 7;
              break;
            }

            return _context10.abrupt("return", res.status(203).json({
              ok: false,
              OrigenDestino: false
            }));

          case 7:
            return _context10.abrupt("return", res.status(200).json(OrigenDestino));

          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](1);
            (0, _handleError.HttpError)(res, _context10.t0);
            next();

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 10]]);
  }));

  return function GetTrackinInformationDestinoOrigenAll(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.GetTrackinInformationDestinoOrigenAll = GetTrackinInformationDestinoOrigenAll;
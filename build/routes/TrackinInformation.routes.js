"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _TrackinInformation = require("../controllers/TrackinInformation.controller");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.CreateTrackingInformation);
router.put("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.UpdateTrackingInformation);
router.get("/destino/:COD_DESTINO", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.DestinoGetTrackinOne);
router.get("/inicio/:COD_INICIO", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.OrigenGetTrackinOne);
router.get("/orden/:COD_ORDEN", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.GetTrackinInformationOrden);
router.get("/origenDestino/:COD_ORDEN", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.GetOrigenDestinoAllTracking);
router.get("/origenDestinoAdministrador/:COD_ORDEN", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.GetOrigenDestinoAllTrackingAdministrador);
router.get("/origenDestinoAll/:COD_ORDEN", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.GetTrackinInformationDestinoOrigenAll);
router.get("/origen/:COD_ORDEN", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.GetTrackinInformationOrigen);
router.get("/destino/:COD_ORDEN", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _TrackinInformation.GetTrackinInformationDestino);
var _default = router;
exports["default"] = _default;
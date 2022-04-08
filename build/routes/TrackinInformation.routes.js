"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/TrackinInformation.controller"),
    CreateTrackingInformation = _require.CreateTrackingInformation,
    GetTrackinInformationOrden = _require.GetTrackinInformationOrden,
    GetTrackinInformationOrigen = _require.GetTrackinInformationOrigen,
    GetTrackinInformationDestino = _require.GetTrackinInformationDestino,
    GetOrigenDestinoAllTracking = _require.GetOrigenDestinoAllTracking,
    GetTrackinInformationDestinoOrigenAll = _require.GetTrackinInformationDestinoOrigenAll,
    GetOrigenDestinoAllTrackingAdministrador = _require.GetOrigenDestinoAllTrackingAdministrador,
    OrigenGetTrackinOne = _require.OrigenGetTrackinOne,
    DestinoGetTrackinOne = _require.DestinoGetTrackinOne,
    UpdateTrackingInformation = _require.UpdateTrackingInformation;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.post("/", [verifyToken, verifyIndUser], CreateTrackingInformation);
router.put("/", [verifyToken, verifyIndUser], UpdateTrackingInformation);
router.get("/destino/:COD_DESTINO", [verifyToken, verifyIndUser], DestinoGetTrackinOne);
router.get("/inicio/:COD_INICIO", [verifyToken, verifyIndUser], OrigenGetTrackinOne);
router.get("/orden/:COD_ORDEN", [verifyToken, verifyIndUser], GetTrackinInformationOrden);
router.get("/origenDestino/:COD_ORDEN", [verifyToken, verifyIndUser], GetOrigenDestinoAllTracking);
router.get("/origenDestinoAdministrador/:COD_ORDEN", [verifyToken, verifyIndUser], GetOrigenDestinoAllTrackingAdministrador);
router.get("/origenDestinoAll/:COD_ORDEN", [verifyToken, verifyIndUser], GetTrackinInformationDestinoOrigenAll);
router.get("/origen/:COD_ORDEN", [verifyToken, verifyIndUser], GetTrackinInformationOrigen);
router.get("/destino/:COD_ORDEN", [verifyToken, verifyIndUser], GetTrackinInformationDestino);
module.exports = router;
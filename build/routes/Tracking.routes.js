"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Tracking.Controllers"),
    CreateTracking = _require.CreateTracking,
    GetTrackingsNumberService = _require.GetTrackingsNumberService,
    GetTrackingsNumber = _require.GetTrackingsNumber,
    UpdateTracking = _require.UpdateTracking,
    GetTracking_not_orden = _require.GetTracking_not_orden,
    TrackingNotOrdenType = _require.TrackingNotOrdenType,
    TrackingNotOrden = _require.TrackingNotOrden,
    TrackingNotOrdenCustomer = _require.TrackingNotOrdenCustomer,
    GetTracking = _require.GetTracking;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/search/:COD_SERVICE/:NUM_TRACKING", [verifyToken, verifyIndUser], GetTrackingsNumberService);
router.get("/search/:NUM_TRACKING", [verifyToken, verifyIndUser], GetTrackingsNumber);
router.get("/received/:RECEIVED_TRACKING", [verifyToken, verifyIndUser], TrackingNotOrden);
router.get("/received/:RECEIVED_TRACKING/:COD_CUSTOMER/:NUM_TRACKING", [verifyToken, verifyIndUser], TrackingNotOrdenCustomer);
router.get("/type/:COD_TYPEPACKAGE/:RECEIVED_TRACKING", [verifyToken, verifyIndUser], TrackingNotOrdenType);
router.get("/:COD_TRACKING/:COD_PACKAGE/:NUM_LOCKER/:COD_CUSTOMER", [verifyToken, verifyIndUser], GetTracking_not_orden);
router.get("/:NUM_TRACKING", [verifyToken, verifyIndUser], GetTrackingsNumber);
router.get("/GetBytracking/:COD_TRACKING", [verifyToken, verifyIndUser], GetTracking);
router.post("/", [verifyToken, verifyIndUser], CreateTracking);
router.put("/:COD_TRACKING", [verifyToken, verifyIndUser], UpdateTracking);
module.exports = router;
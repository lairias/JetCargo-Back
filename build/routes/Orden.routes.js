"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Orden.controllers"),
    GetOrdenTracking = _require.GetOrdenTracking,
    GetOrdenByTracking = _require.GetOrdenByTracking,
    GetOrdenByNumberTracking = _require.GetOrdenByNumberTracking;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/:COD_TRACKING", [verifyToken, verifyIndUser], GetOrdenTracking);
router.get("/tracking_cod/:COD_TRACKING", [verifyToken, verifyIndUser], GetOrdenByTracking);
router.get("/tracking_number/:NUM_TRACKING", [verifyToken, verifyIndUser], GetOrdenByNumberTracking);
module.exports = router;
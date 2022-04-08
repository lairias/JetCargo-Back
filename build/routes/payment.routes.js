"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Payment.Controllers"),
    CancelCreateOrden = _require.CancelCreateOrden,
    CaptureOrden = _require.CaptureOrden,
    CreateOrden = _require.CreateOrden;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.post("/create-orden", CreateOrden);
router.get("/capture-orden/:COD_CUSTOMER/:COD_TRACKING/:COD_PACKAGE", CaptureOrden);
router.get("/cancel-create-orden", CancelCreateOrden);
module.exports = router;
"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Phone.controllers"),
    GetPhoneLocker = _require.GetPhoneLocker;

var _require2 = require("../middleware/verifySignup"),
    verifyToken = _require2.verifyToken,
    verifyIndUser = _require2.verifyIndUser;

router.get("/locker/:COD_LOCKER", [verifyToken, verifyIndUser], GetPhoneLocker);
module.exports = router;
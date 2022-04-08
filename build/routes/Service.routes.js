"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Service.controllers"),
    GetService = _require.GetService;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/", [verifyToken, verifyIndUser], GetService);
module.exports = router;
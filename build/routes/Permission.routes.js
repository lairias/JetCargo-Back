"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Permission.controllers"),
    GetPermissionUser = _require.GetPermissionUser;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/", [verifyToken, verifyIndUser], GetPermissionUser);
module.exports = router;
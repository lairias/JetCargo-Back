"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Seguridad.controllers"),
    GetSeguridadID = _require.GetSeguridadID;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/:COD_SEGURIDAD", GetSeguridadID);
module.exports = router;
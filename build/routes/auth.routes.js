"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Auth.controllers"),
    singIn = _require.singIn,
    singUp = _require.singUp,
    RevalidarToken = _require.RevalidarToken;

var _require2 = require("../middleware/verifyEmail"),
    CheckDuplicateEmail = _require2.CheckDuplicateEmail;

var _require3 = require("../middleware/tokens/renewToken"),
    renewToken = _require3.renewToken;

router.post("/signup", CheckDuplicateEmail, singUp);
router.post("/signin", singIn);
router.get("/renew", renewToken, RevalidarToken);
module.exports = router;
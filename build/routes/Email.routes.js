"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Email.Controllers"),
    VeryEmail = _require.VeryEmail,
    GetEmail = _require.GetEmail;

router.get("/very/:COD_USER/:EMAIL/:TOKEN", VeryEmail);
router.get("/:EMAIL", GetEmail);
module.exports = router;
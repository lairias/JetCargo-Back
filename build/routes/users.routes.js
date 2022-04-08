"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../middleware/verifySignup"),
    verifyToken = _require.verifyToken;

module.exports = router;
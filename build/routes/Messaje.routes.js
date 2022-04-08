"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Messaje.Controllers"),
    PostMenssge = _require.PostMenssge;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/new", PostMenssge);
module.exports = router;
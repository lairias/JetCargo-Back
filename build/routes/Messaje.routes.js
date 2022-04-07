"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Messaje = require("../controllers/Messaje.Controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/new", _Messaje.PostMenssge);
var _default = router;
exports["default"] = _default;
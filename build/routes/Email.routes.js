"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Email = require("../controllers/Email.Controllers");

var router = (0, _express.Router)();
router.get("/very/:COD_USER/:EMAIL/:TOKEN", _Email.VeryEmail);
router.get("/:EMAIL", _Email.GetEmail);
var _default = router;
exports["default"] = _default;
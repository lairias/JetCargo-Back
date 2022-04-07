"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Service = require("../controllers/Service.controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Service.GetService);
var _default = router;
exports["default"] = _default;
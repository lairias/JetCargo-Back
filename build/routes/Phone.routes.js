"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Phone = require("../controllers/Phone.controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/locker/:COD_LOCKER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Phone.GetPhoneLocker);
var _default = router;
exports["default"] = _default;
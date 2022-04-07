"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Permission = require("../controllers/Permission.controllers");

var _verifySignup = require("../middleware/verifySignup");

_Permission.GetPermissionUser;
var router = (0, _express.Router)();
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Permission.GetPermissionUser);
var _default = router;
exports["default"] = _default;
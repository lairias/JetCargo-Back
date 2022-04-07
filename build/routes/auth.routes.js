"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Auth = require("../controllers/Auth.controllers");

var _verifyEmail = require("../middleware/verifyEmail");

var _renewToken = require("../middleware/tokens/renewToken");

var router = (0, _express.Router)();
router.post("/signup", _verifyEmail.CheckDuplicateEmail, _Auth.singUp);
router.post("/signin", _Auth.singIn);
router.get("/renew", _renewToken.renewToken, _Auth.RevalidarToken);
var _default = router;
exports["default"] = _default;
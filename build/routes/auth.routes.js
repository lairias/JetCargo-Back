"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Auth = require("../controllers/Auth.controllers");

var router = (0, _express.Router)();
router.post("/signup", _Auth.singUp);
router.post("/signin", _Auth.singIn);
var _default = router;
exports["default"] = _default;
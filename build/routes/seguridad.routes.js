"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Seguridad = require("../controllers/Seguridad.controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/:COD_SEGURIDAD", _Seguridad.GetSeguridadID);
var _default = router;
exports["default"] = _default;
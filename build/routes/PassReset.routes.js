"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _PassReset = require("../controllers/PassReset.Controllers");

var _verifyPassReset = require("../middleware/verifyPassReset");

var router = (0, _express.Router)();
router.post("/", _PassReset.CreatePassReset);
router.post("/reset-password/:COD_USER/:CORREO/:TOKEN", [_verifyPassReset.verifyTokenPass], _PassReset.ForgotPassword);
router.get("/:EMAIL", _PassReset.GetPassReset);
router["delete"]("/:EMAIL", _PassReset.DeletePassReset);
var _default = router;
exports["default"] = _default;
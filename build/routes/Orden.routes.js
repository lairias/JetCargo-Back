"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Orden = require("../controllers/Orden.controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/:COD_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Orden.GetOrdenTracking);
router.get("/tracking_cod/:COD_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Orden.GetOrdenByTracking);
router.get("/tracking_number/:NUM_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Orden.GetOrdenByNumberTracking);
var _default = router;
exports["default"] = _default;
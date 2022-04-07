"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Payment = require("../controllers/Payment.Controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.post("/create-orden", _Payment.CreateOrden);
router.get("/capture-orden/:COD_CUSTOMER/:COD_TRACKING/:COD_PACKAGE", _Payment.CaptureOrden);
router.get("/cancel-create-orden", _Payment.CancelCreateOrden);
var _default = router;
exports["default"] = _default;
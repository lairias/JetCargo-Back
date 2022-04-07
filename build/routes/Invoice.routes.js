"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Invoice = require("../controllers/Invoice.Controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/:COD_USER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Invoice.GetInformationInvoceByCustomer);
var _default = router;
exports["default"] = _default;
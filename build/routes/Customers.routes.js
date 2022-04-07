"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Customers = require("../controllers/Customers.Controllers");

var _Customer = require("../middleware/permissions/Customer.Permission");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Customer.CustomerView], _Customers.GetCustomers);
var _default = router;
exports["default"] = _default;
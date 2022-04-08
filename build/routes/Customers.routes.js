"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Customers.Controllers.js"),
    GetCustomers = _require.GetCustomers;

var _require2 = require("../middleware/permissions/Customer.Permission.js"),
    CustomerView = _require2.CustomerView;

var _require3 = require("../middleware/verifySignup.js"),
    verifyIndUser = _require3.verifyIndUser,
    verifyToken = _require3.verifyToken;

router.get("/", [verifyToken, verifyIndUser, CustomerView], GetCustomers);
module.exports = router;
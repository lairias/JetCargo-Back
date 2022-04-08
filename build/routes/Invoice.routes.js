"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Invoice.Controllers"),
    GetInformationInvoceByCustomer = _require.GetInformationInvoceByCustomer;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/:COD_USER", [verifyToken, verifyIndUser], GetInformationInvoceByCustomer);
module.exports = router;
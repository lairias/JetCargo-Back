const express = require("express");
const router = express.Router();

const { GetCustomers } =require( "../controllers/Customers.Controllers.js")
const {
  CustomerView,
} =require( "../middleware/permissions/Customer.Permission.js")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup.js")


router.get("/", [verifyToken, verifyIndUser, CustomerView], GetCustomers);
module.exports = router;

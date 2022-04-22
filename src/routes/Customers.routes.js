const express = require("express");
const router = express.Router();

const { GetCustomers } =require( "../controllers/Customers.Controllers.js")

const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup.js")


router.get("/", [verifyToken, verifyIndUser], GetCustomers);
module.exports = router;

const express = require("express");
const router = express.Router();
const { GetShippingCost } =require( "../controllers/Shippincost.Controller")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/", [verifyToken, verifyIndUser], GetShippingCost);

module.exports = router;

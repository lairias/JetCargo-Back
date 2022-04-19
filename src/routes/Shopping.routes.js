const express = require("express");
const router = express.Router();
const { GetShippingCost } =require( "../controllers/ShippingCost.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/:COD_SHIPPINGCOST", [verifyToken, verifyIndUser], GetShippingCost);
router.get("/", [verifyToken, verifyIndUser], GetShippingCost);

module.exports = router;

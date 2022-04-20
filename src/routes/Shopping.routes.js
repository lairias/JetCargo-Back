const express = require("express");
const router = express.Router();
const { GetShippingCost,GetShippingCostALL,CreateShippingCost,GetShippingCostUpdate } =require( "../controllers/ShippingCost.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/:COD_SHIPPINGCOST", [verifyToken, verifyIndUser], GetShippingCost);
router.put("/:COD_SHIPPINGCOST", [verifyToken, verifyIndUser], GetShippingCostUpdate);
router.get("/", [verifyToken, verifyIndUser], GetShippingCostALL);
router.post("/", [verifyToken, verifyIndUser], CreateShippingCost);

module.exports = router;

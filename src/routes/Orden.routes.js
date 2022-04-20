const express = require("express");
const router = express.Router();
const { GetOrdenTracking,GetOrdenByTracking,GetOrdenByNumberTracking,GetOrden} =require( "../controllers/Orden.controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")
router.get("/:COD_TRACKING", [verifyToken, verifyIndUser], GetOrdenTracking);
router.get("/", [verifyToken, verifyIndUser], GetOrden);
router.get("/tracking_cod/:COD_TRACKING", [verifyToken, verifyIndUser], GetOrdenByTracking);
router.get("/tracking_number/:NUM_TRACKING", [verifyToken, verifyIndUser], GetOrdenByNumberTracking);


module.exports = router;

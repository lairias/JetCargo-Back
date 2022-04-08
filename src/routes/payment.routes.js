const express = require("express");
const router = express.Router();
const {
  CancelCreateOrden,
  CaptureOrden,
  CreateOrden,
} =require( "../controllers/Payment.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.post("/create-orden", CreateOrden);
router.get(
  "/capture-orden/:COD_CUSTOMER/:COD_TRACKING/:COD_PACKAGE",
  CaptureOrden
);
router.get("/cancel-create-orden", CancelCreateOrden);


module.exports = router;

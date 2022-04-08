const express = require("express");
const router = express.Router();
const {
  CreatePassReset,
  DeletePassReset,
  ForgotPassword,
  GetPassReset,
  UpdatePassReset,
  VeryTokenReset,
} =require( "../controllers/PassReset.Controllers")
const { verifyTokenPass } =require( "../middleware/verifyPassReset")

router.post("/", CreatePassReset);
router.post(
  "/reset-password/:COD_USER/:CORREO/:TOKEN",
  [verifyTokenPass],
  ForgotPassword
);
router.get("/:EMAIL", GetPassReset);
router.delete("/:EMAIL", DeletePassReset);


module.exports = router;

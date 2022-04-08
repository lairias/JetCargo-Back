const express = require("express");
const router = express.Router();
const {
 GetInformationInvoceByCustomer
} =require( "../controllers/Invoice.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/:COD_USER",[verifyToken, verifyIndUser], GetInformationInvoceByCustomer);

module.exports = router;

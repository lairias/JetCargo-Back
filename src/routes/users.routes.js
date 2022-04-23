const express = require("express");
const router = express.Router();
const {GetUsers,GetUserAdmin,UpdateUserAdmin,GetUserCustomerAdmin} = require("../controllers/User.Controllers")
const { verifyToken,verifyIndUser } =require( "../middleware/verifySignup")


router.get("/", [verifyToken, verifyIndUser], GetUsers);
router.get("/customer/:COD_CUSTOMER", [verifyToken, verifyIndUser], GetUserCustomerAdmin);
router.get("/admin/:COD_USER", [verifyToken, verifyIndUser], GetUserAdmin);
router.put("/admin/:COD_USER", [verifyToken, verifyIndUser], UpdateUserAdmin);

module.exports = router;

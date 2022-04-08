const express = require("express");
const router = express.Router();
const { GetPhoneLocker } =require( "../controllers/Phone.controllers")
const { verifyToken, verifyIndUser } =require( "../middleware/verifySignup")


router.get("/locker/:COD_LOCKER", [verifyToken, verifyIndUser], GetPhoneLocker);


module.exports = router;

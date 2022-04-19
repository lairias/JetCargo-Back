const express = require("express");
const router = express.Router();
const {
  singIn,
  singUp,
  singUpAdmin,
  RevalidarToken,
} =require( "../controllers/Auth.controllers")
const { CheckDuplicateEmail } =require( "../middleware/verifyEmail")
const { renewToken } =require( "../middleware/tokens/renewToken")

router.post("/signup", CheckDuplicateEmail, singUp);
router.post("/signupAdmin", CheckDuplicateEmail, singUpAdmin);
router.post("/signin", singIn);
router.get("/renew", renewToken, RevalidarToken);

module.exports = router;

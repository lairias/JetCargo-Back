const express = require("express");
const router = express.Router();
const { VeryEmail, GetEmail } =require( "../controllers/Email.Controllers")



router.get("/very/:COD_USER/:EMAIL/:TOKEN", VeryEmail);
router.get("/:EMAIL", GetEmail);


module.exports = router;

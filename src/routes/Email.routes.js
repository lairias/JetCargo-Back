const express = require("express");
const router = express.Router();
const { VeryEmail, GetEmail,SendNotificationCustomer } =require( "../controllers/Email.Controllers")



router.get("/very/:COD_USER/:EMAIL/:TOKEN", VeryEmail);
router.post("/sendNotificationCustomer/:COD_USER/:EMAIL/:TOKEN", SendNotificationCustomer);
router.get("/:EMAIL", GetEmail);


module.exports = router;

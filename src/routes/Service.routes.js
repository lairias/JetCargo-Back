const express = require("express");
const router = express.Router();
const { GetService } =require( "../controllers/Service.controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/", [verifyToken, verifyIndUser], GetService);

module.exports = router;

const express = require("express");
const router = express.Router();
const { GetService,GetServiceInd } =require( "../controllers/Service.controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/", [verifyToken, verifyIndUser], GetService);
router.get("/ind", [verifyToken, verifyIndUser], GetServiceInd);

module.exports = router;

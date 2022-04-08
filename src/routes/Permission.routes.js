const express = require("express");
const router = express.Router();
const { GetPermissionUser } =require( "../controllers/Permission.controllers")

const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/", [verifyToken, verifyIndUser], GetPermissionUser);


module.exports = router;

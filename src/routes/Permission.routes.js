const express = require("express");
const router = express.Router();
const { GetPermissionUser,GetPermissionUserID,PutPermissionUser } =require( "../controllers/Permission.controllers")

const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/", [verifyToken, verifyIndUser], GetPermissionUser);
router.get("/:COD_PERMISO", [verifyToken, verifyIndUser], GetPermissionUserID);
router.put("/:COD_PERMISO", [verifyToken, verifyIndUser], PutPermissionUser);


module.exports = router;

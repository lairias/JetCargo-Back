const express = require("express");
const router = express.Router();
const {
  GetTypeUsers,
  CreateTypeUser,
  DeleteTypeUser,
  UpdateTypeUser,
  GetTypeUser,
} =require( "../controllers/TypeUsers.Controllers")



router.get(
  "/",
  [verifyToken, verifyIndUser, TypeUserCreate, verifyRoles],
  GetTypeUsers
);
router.post("/", CreateTypeUser);
router.delete("/:COD_TYPEUSER", DeleteTypeUser);
router.put("/:COD_TYPEUSER", UpdateTypeUser);
router.get("/:COD_TYPEUSER", GetTypeUser);


module.exports = router;

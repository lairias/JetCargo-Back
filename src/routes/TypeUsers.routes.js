const express = require("express");
const router = express.Router();
const {
  GetTypeUsers,
  CreateTypeUser,
  DeleteTypeUser,
  UpdateTypeUser,
  GetTypeUser,
} =require( "../controllers/TypeUsers.Controllers");
const { verifyToken, verifyIndUser } = require("../middleware/verifySignup");



router.get(
  "/",
  [verifyToken, verifyIndUser],
  GetTypeUsers
);
router.post("/",
[verifyToken, verifyIndUser], CreateTypeUser);
router.delete("/:COD_TYPEUSERS",
[verifyToken, verifyIndUser], DeleteTypeUser);
router.put("/:COD_TYPEUSERS",
[verifyToken, verifyIndUser], UpdateTypeUser);
router.get("/:COD_TYPEUSERS",
[verifyToken, verifyIndUser], GetTypeUser);


module.exports = router;

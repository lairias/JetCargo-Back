const express = require("express");
const router = express.Router();
const {
  CreateRole,
  DeleteRole,
  GetRole,
  GetRoles,
  GetRoleDisting,
  UpdateRole,
} =require( "../controllers/Roles.controllers")
const { verifyToken, verifyIndUser } =require( "../middleware/verifySignup")
const { verifyRoles } =require( "../middleware/verifyRoles")
const {
  TypeUserCreate,
  TypeUserView,
  TypeUserUpdate,
  TypeUserDelete,
} =require( "../middleware/permissions/TypeUsers.Permission")


router.post("/admin", [verifyToken, verifyIndUser, TypeUserCreate], CreateRole);
router.get(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser, TypeUserView],
  GetRole
);
router.get(
  "/disting/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser, TypeUserView],
  GetRoleDisting
);

router.get("/", [verifyToken, verifyIndUser, TypeUserView], GetRoles);

router.put(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser, TypeUserUpdate],
  UpdateRole
);
router.delete(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser, TypeUserDelete],
  DeleteRole
);

module.exports = router;

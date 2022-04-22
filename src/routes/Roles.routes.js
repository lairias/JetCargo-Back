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

router.post("/admin", [verifyToken, verifyIndUser], CreateRole);
router.get(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser],
  GetRole
);
router.get(
  "/disting/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser],
  GetRoleDisting
);

router.get("/", [verifyToken, verifyIndUser], GetRoles);

router.put(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser],
  UpdateRole
);
router.delete(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser],
  DeleteRole
);

module.exports = router;

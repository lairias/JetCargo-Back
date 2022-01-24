import { Router } from "express";
import {
  CreateRole,
  DeleteRole,
  GetRole,
  GetRoles,
  UpdateRole,
} from "../controllers/Roles.controllers";
import {verifyToken, verifyIndUser} from "../middleware/verifySignup"
import {verifyRoles} from "../middleware/verifyRoles"
import {TypeUserCreate,TypeUserView,TypeUserUpdate,TypeUserDelete} from "../middleware/permissions/TypeUsers.Permission"

const router = Router();
router.post("/", [verifyToken, verifyIndUser, TypeUserCreate, verifyRoles], CreateRole);

router.get("/:COD_ROLE", [verifyToken, verifyIndUser, TypeUserCreate], GetRole);

router.get("/", [verifyToken, verifyIndUser, TypeUserCreate], GetRoles);
router.put("/:COD_ROLE", UpdateRole);
router.delete("/:COD_ROLE", DeleteRole);

export default router;

import { Router } from "express";
import {
  CreateRole,
  DeleteRole,
  GetRole,
  GetRoles,
  UpdateRole,
} from "../controllers/Roles.controllers";
import { verifyToken, verifyIndUser } from "../middleware/verifySignup";
import { verifyRoles } from "../middleware/verifyRoles";
import {
  TypeUserCreate,
  TypeUserView,
  TypeUserUpdate,
  TypeUserDelete,
} from "../middleware/permissions/TypeUsers.Permission";

const router = Router();
router.post(
  "/",
  [verifyToken, verifyIndUser, TypeUserCreate],
  CreateRole
);
router.get(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser, TypeUserView],
  GetRole
);

router.get("/", 
  [verifyToken, verifyIndUser, TypeUserView], 
  GetRoles
);

router.put(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser,TypeUserUpdate],
  UpdateRole
);
router.delete(
  "/:COD_TYPEUSERS",
  [verifyToken, verifyIndUser, TypeUserDelete],
  DeleteRole
);

export default router;

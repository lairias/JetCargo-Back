import { Router } from "express";
import {
  CreateRole,
  DeleteRole,
  GetRole,
  GetRoles,
  UpdateRole,
} from "../controllers/Roles.controllers";

const router = Router();

router.post("/", CreateRole);
router.get("/:COD_ROLE", GetRole);
router.get("/", GetRoles);
router.put("/:COD_ROLE", UpdateRole);
router.delete("/:COD_ROLE", DeleteRole);

export default router;

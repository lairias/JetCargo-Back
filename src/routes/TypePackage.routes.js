import { Router } from "express";
import {
  GetTypePackages,
  DeleteTypePackage,
  GetTypePackage,
  UpdateTypePackage,
  CreateTypePackage,
} from "../controllers/TypePackage.Controllers";

const router = Router();
router.get("/", GetTypePackages);
router.get("/:COD_TYPEPACKAGE", GetTypePackage);
router.post("/", CreateTypePackage);
router.delete("/:COD_TYPEPACKAGE", DeleteTypePackage);
router.put("/:COD_TYPEPACKAGE", UpdateTypePackage);

export default router;

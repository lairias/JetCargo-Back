import { Router } from "express";
import {
  GetPackages,
  DeletePackage,
  GetPackage,
  UpdatePackage,
  CreatePackage,
} from "../controllers/Package.Controllers";

const router = Router();
router.get("/", GetPackages);
router.get("/:COD_PACKAGE", GetPackage);
router.post("/", CreatePackage);
router.delete("/:COD_PACKAGE", DeletePackage);
router.put("/:COD_PACKAGE", UpdatePackage);

export default router;

import { Router } from "express";
import {
  GetCatPackages,
  GetCatPackage,
  CreateCatPackage,
  UpdateCatPackage,
  DeleteCatPackage,
} from "../controllers/CatPackage.Controllers";

const router = Router();
router.get("/", GetCatPackages);
router.get("/:COD_CATPACKAGE", GetCatPackage);
router.post("/", CreateCatPackage);
router.put("/:COD_CATPACKAGE", UpdateCatPackage);
router.delete("/:COD_CATPACKAGE", DeleteCatPackage);

export default router;

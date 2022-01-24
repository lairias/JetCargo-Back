import { Router } from "express";
import {
  GetCatPackages,
  GetCatPackage,
  CreateCatPackage,
  UpdateCatPackage,
  DeleteCatPackage,
} from "../controllers/CatPackage.Controllers";

import {CatPackageCreate,CatPackageView,CatPackageDelete,CatPackageUpdate} from "../middleware/permissions/CatPackage.Permission"
import {verifyIndUser,verifyToken} from "../middleware/verifySignup";

const router = Router();
router.get("/", [verifyToken, verifyIndUser, CatPackageView], GetCatPackages);
router.get("/:COD_CATPACKAGE",[verifyToken, verifyIndUser, CatPackageView], GetCatPackage);
router.post("/",[verifyToken, verifyIndUser, CatPackageCreate], CreateCatPackage);
router.put("/:COD_CATPACKAGE",[verifyToken, verifyIndUser, CatPackageUpdate], UpdateCatPackage);
router.delete("/:COD_CATPACKAGE", [verifyToken, verifyIndUser, CatPackageDelete], DeleteCatPackage);

export default router;

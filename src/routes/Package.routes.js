import { Router } from "express";
import {
  GetPackages,
  DeletePackage,
  GetPackage,
  UpdatePackage,
  CreatePackage,
  GetPackageLokerByCustomer,
} from "../controllers/Package.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";

const router = Router();
router.get("/", GetPackages);
router.get("/:COD_PACKAGE", [verifyToken, verifyIndUser], GetPackage);
router.get(
  "/:COD_CUSTOMER/:COD_LOCKER",
  [verifyToken, verifyIndUser],
  GetPackageLokerByCustomer
);
router.post("/", CreatePackage);
router.delete("/:COD_PACKAGE", DeletePackage);
router.put("/:COD_PACKAGE", UpdatePackage);

export default router;

const express = require("express");
const router = express.Router();
const {
  GetCatPackages,
  GetCatPackage,
  CreateCatPackage,
  UpdateCatPackage,
  DeleteCatPackage,
} =require( "../controllers/CatPackage.Controllers")

const {
  CatPackageCreate,
  CatPackageView,
  CatPackageDelete,
  CatPackageUpdate,
} =require( "../middleware/permissions/CatPackage.Permission")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")


router.get("/", [verifyToken, verifyIndUser, CatPackageView], GetCatPackages);
router.get(
  "/:COD_CATPACKAGE",
  [verifyToken, verifyIndUser, CatPackageView],
  GetCatPackage
);
router.post(
  "/",
  [verifyToken, verifyIndUser, CatPackageCreate],
  CreateCatPackage
);
router.put(
  "/:COD_CATPACKAGE",
  [verifyToken, verifyIndUser, CatPackageUpdate],
  UpdateCatPackage
);
router.delete(
  "/:COD_CATPACKAGE",
  [verifyToken, verifyIndUser, CatPackageDelete],
  DeleteCatPackage
);


module.exports = router;

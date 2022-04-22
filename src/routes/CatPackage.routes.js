const express = require("express");
const router = express.Router();
const {
  GetCatPackages,
  GetCatPackage,
  CreateCatPackage,
  GetCatPackagesind,
  UpdateCatPackage,
  DeleteCatPackage,
} =require( "../controllers/CatPackage.Controllers")

const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")


router.get("/", [verifyToken, verifyIndUser], GetCatPackages);
router.get("/ind", [verifyToken, verifyIndUser], GetCatPackagesind);
router.get(
  "/:COD_CATPACKAGE",
  [verifyToken, verifyIndUser],
  GetCatPackage
);
router.post(
  "/",
  [verifyToken, verifyIndUser],
  CreateCatPackage
);
router.put(
  "/:COD_CATPACKAGE",
  [verifyToken, verifyIndUser],
  UpdateCatPackage
);
router.delete(
  "/:COD_CATPACKAGE",
  [verifyToken, verifyIndUser],
  DeleteCatPackage
);


module.exports = router;

const express = require("express");
const router = express.Router();
const {
  GetPackages,
  DeletePackage,
  GetPackage,
  UpdatePackage,
  CreatePackage,
  GetPackageLokerByCustomer,
} =require( "../controllers/Package.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")


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


module.exports = router;

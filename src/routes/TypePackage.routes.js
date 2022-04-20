const express = require("express");
const router = express.Router();
const {
  GetTypePackages,
  DeleteTypePackage,
  GetTypePackage,
  UpdateTypePackage,
  CreateTypePackage,
  GetTypePackageShipping
} =require( "../controllers/TypePackage.Controllers");

router.get("/", GetTypePackages);
router.get("/:COD_TYPEPACKAGE", GetTypePackage);
router.get("/shipping/:COD_TYPEPACKAGE", GetTypePackageShipping);
router.post("/", CreateTypePackage);
router.delete("/:COD_TYPEPACKAGE", DeleteTypePackage);
router.put("/:COD_TYPEPACKAGE", UpdateTypePackage);
module.exports = router;

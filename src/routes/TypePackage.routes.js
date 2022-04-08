const express = require("express");
const router = express.Router();
const {
  GetTypePackages,
  DeleteTypePackage,
  GetTypePackage,
  UpdateTypePackage,
  CreateTypePackage,
} =require( "../controllers/TypePackage.Controllers")


router.get("/", GetTypePackages);
router.get("/:COD_TYPEPACKAGE", GetTypePackage);
router.post("/", CreateTypePackage);
router.delete("/:COD_TYPEPACKAGE", DeleteTypePackage);
router.put("/:COD_TYPEPACKAGE", UpdateTypePackage);


module.exports = router;

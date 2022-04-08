"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Package.Controllers"),
    GetPackages = _require.GetPackages,
    DeletePackage = _require.DeletePackage,
    GetPackage = _require.GetPackage,
    UpdatePackage = _require.UpdatePackage,
    CreatePackage = _require.CreatePackage,
    GetPackageLokerByCustomer = _require.GetPackageLokerByCustomer;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

router.get("/", GetPackages);
router.get("/:COD_PACKAGE", [verifyToken, verifyIndUser], GetPackage);
router.get("/:COD_CUSTOMER/:COD_LOCKER", [verifyToken, verifyIndUser], GetPackageLokerByCustomer);
router.post("/", CreatePackage);
router["delete"]("/:COD_PACKAGE", DeletePackage);
router.put("/:COD_PACKAGE", UpdatePackage);
module.exports = router;
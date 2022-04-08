"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/CatPackage.Controllers"),
    GetCatPackages = _require.GetCatPackages,
    GetCatPackage = _require.GetCatPackage,
    CreateCatPackage = _require.CreateCatPackage,
    UpdateCatPackage = _require.UpdateCatPackage,
    DeleteCatPackage = _require.DeleteCatPackage;

var _require2 = require("../middleware/permissions/CatPackage.Permission"),
    CatPackageCreate = _require2.CatPackageCreate,
    CatPackageView = _require2.CatPackageView,
    CatPackageDelete = _require2.CatPackageDelete,
    CatPackageUpdate = _require2.CatPackageUpdate;

var _require3 = require("../middleware/verifySignup"),
    verifyIndUser = _require3.verifyIndUser,
    verifyToken = _require3.verifyToken;

router.get("/", [verifyToken, verifyIndUser, CatPackageView], GetCatPackages);
router.get("/:COD_CATPACKAGE", [verifyToken, verifyIndUser, CatPackageView], GetCatPackage);
router.post("/", [verifyToken, verifyIndUser, CatPackageCreate], CreateCatPackage);
router.put("/:COD_CATPACKAGE", [verifyToken, verifyIndUser, CatPackageUpdate], UpdateCatPackage);
router["delete"]("/:COD_CATPACKAGE", [verifyToken, verifyIndUser, CatPackageDelete], DeleteCatPackage);
module.exports = router;
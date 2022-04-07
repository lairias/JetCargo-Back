"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _CatPackage = require("../controllers/CatPackage.Controllers");

var _CatPackage2 = require("../middleware/permissions/CatPackage.Permission");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _CatPackage2.CatPackageView], _CatPackage.GetCatPackages);
router.get("/:COD_CATPACKAGE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _CatPackage2.CatPackageView], _CatPackage.GetCatPackage);
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _CatPackage2.CatPackageCreate], _CatPackage.CreateCatPackage);
router.put("/:COD_CATPACKAGE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _CatPackage2.CatPackageUpdate], _CatPackage.UpdateCatPackage);
router["delete"]("/:COD_CATPACKAGE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _CatPackage2.CatPackageDelete], _CatPackage.DeleteCatPackage);
var _default = router;
exports["default"] = _default;
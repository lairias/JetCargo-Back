"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Package = require("../controllers/Package.Controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/", _Package.GetPackages);
router.get("/:COD_PACKAGE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Package.GetPackage);
router.get("/:COD_CUSTOMER/:COD_LOCKER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Package.GetPackageLokerByCustomer);
router.post("/", _Package.CreatePackage);
router["delete"]("/:COD_PACKAGE", _Package.DeletePackage);
router.put("/:COD_PACKAGE", _Package.UpdatePackage);
var _default = router;
exports["default"] = _default;
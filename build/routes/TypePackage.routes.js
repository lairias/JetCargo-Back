"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _TypePackage = require("../controllers/TypePackage.Controllers");

var router = (0, _express.Router)();
router.get("/", _TypePackage.GetTypePackages);
router.get("/:COD_TYPEPACKAGE", _TypePackage.GetTypePackage);
router.post("/", _TypePackage.CreateTypePackage);
router["delete"]("/:COD_TYPEPACKAGE", _TypePackage.DeleteTypePackage);
router.put("/:COD_TYPEPACKAGE", _TypePackage.UpdateTypePackage);
var _default = router;
exports["default"] = _default;
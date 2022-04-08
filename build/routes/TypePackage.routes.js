"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/TypePackage.Controllers"),
    GetTypePackages = _require.GetTypePackages,
    DeleteTypePackage = _require.DeleteTypePackage,
    GetTypePackage = _require.GetTypePackage,
    UpdateTypePackage = _require.UpdateTypePackage,
    CreateTypePackage = _require.CreateTypePackage;

router.get("/", GetTypePackages);
router.get("/:COD_TYPEPACKAGE", GetTypePackage);
router.post("/", CreateTypePackage);
router["delete"]("/:COD_TYPEPACKAGE", DeleteTypePackage);
router.put("/:COD_TYPEPACKAGE", UpdateTypePackage);
module.exports = router;
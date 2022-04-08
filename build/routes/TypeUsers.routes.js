"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/TypeUsers.Controllers"),
    GetTypeUsers = _require.GetTypeUsers,
    CreateTypeUser = _require.CreateTypeUser,
    DeleteTypeUser = _require.DeleteTypeUser,
    UpdateTypeUser = _require.UpdateTypeUser,
    GetTypeUser = _require.GetTypeUser;

router.get("/", [verifyToken, verifyIndUser, TypeUserCreate, verifyRoles], GetTypeUsers);
router.post("/", CreateTypeUser);
router["delete"]("/:COD_TYPEUSER", DeleteTypeUser);
router.put("/:COD_TYPEUSER", UpdateTypeUser);
router.get("/:COD_TYPEUSER", GetTypeUser);
module.exports = router;
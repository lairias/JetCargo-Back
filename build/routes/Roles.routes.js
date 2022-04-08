"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Roles.controllers"),
    CreateRole = _require.CreateRole,
    DeleteRole = _require.DeleteRole,
    GetRole = _require.GetRole,
    GetRoles = _require.GetRoles,
    UpdateRole = _require.UpdateRole;

var _require2 = require("../middleware/verifySignup"),
    verifyToken = _require2.verifyToken,
    verifyIndUser = _require2.verifyIndUser;

var _require3 = require("../middleware/verifyRoles"),
    verifyRoles = _require3.verifyRoles;

var _require4 = require("../middleware/permissions/TypeUsers.Permission"),
    TypeUserCreate = _require4.TypeUserCreate,
    TypeUserView = _require4.TypeUserView,
    TypeUserUpdate = _require4.TypeUserUpdate,
    TypeUserDelete = _require4.TypeUserDelete;

router.post("/", [verifyToken, verifyIndUser, TypeUserCreate], CreateRole);
router.get("/:COD_TYPEUSERS", [verifyToken, verifyIndUser, TypeUserView], GetRole);
router.get("/", [verifyToken, verifyIndUser, TypeUserView], GetRoles);
router.put("/:COD_TYPEUSERS", [verifyToken, verifyIndUser, TypeUserUpdate], UpdateRole);
router["delete"]("/:COD_TYPEUSERS", [verifyToken, verifyIndUser, TypeUserDelete], DeleteRole);
module.exports = router;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Roles = require("../controllers/Roles.controllers");

var _verifySignup = require("../middleware/verifySignup");

var _verifyRoles = require("../middleware/verifyRoles");

var _TypeUsers = require("../middleware/permissions/TypeUsers.Permission");

var router = (0, _express.Router)();
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _TypeUsers.TypeUserCreate], _Roles.CreateRole);
router.get("/:COD_TYPEUSERS", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _TypeUsers.TypeUserView], _Roles.GetRole);
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _TypeUsers.TypeUserView], _Roles.GetRoles);
router.put("/:COD_TYPEUSERS", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _TypeUsers.TypeUserUpdate], _Roles.UpdateRole);
router["delete"]("/:COD_TYPEUSERS", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _TypeUsers.TypeUserDelete], _Roles.DeleteRole);
var _default = router;
exports["default"] = _default;
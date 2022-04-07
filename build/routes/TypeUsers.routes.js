"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _TypeUsers = require("../controllers/TypeUsers.Controllers");

var router = (0, _express.Router)();
router.get("/", [verifyToken, verifyIndUser, TypeUserCreate, verifyRoles], _TypeUsers.GetTypeUsers);
router.post("/", _TypeUsers.CreateTypeUser);
router["delete"]("/:COD_TYPEUSER", _TypeUsers.DeleteTypeUser);
router.put("/:COD_TYPEUSER", _TypeUsers.UpdateTypeUser);
router.get("/:COD_TYPEUSER", _TypeUsers.GetTypeUser);
var _default = router;
exports["default"] = _default;
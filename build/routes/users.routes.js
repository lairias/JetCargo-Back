"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _PA_people = require("../controllers/PA_people.Controllers");

var router = (0, _express.Router)();
router.post("/", _PA_people.CreateUser);
router.get("/:COD_USER", _PA_people.GetUser);
router.get("/", _PA_people.GetUsers);
router.put("/:COD_USER", _PA_people.UpdateUser);
router["delete"]("/:COD_USER", _PA_people.DeleteUser);
var _default = router;
exports["default"] = _default;
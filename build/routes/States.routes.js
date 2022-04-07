"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _States = require("../controllers/States.Controllers");

var _verifySignup = require("../middleware/verifySignup");

var _States2 = require("../middleware/permissions/States.Permission");

var router = (0, _express.Router)();
router.get("/country/:COD_COUNTRY", _States.GetStatesForCountry);
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _States2.StatesView], _States.GetStates);
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _States2.StatesCreate], _States.CreateState);
router["delete"]("/:COD_STATE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _States2.StatesDelete], _States.DeleteState);
router.put("/:COD_STATE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _States2.StatesUpdate], _States.UpdateState);
router.get("/:COD_STATE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _States2.StatesView], _States.GetState);
var _default = router;
exports["default"] = _default;
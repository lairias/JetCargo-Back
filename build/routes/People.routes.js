"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _verifySignup = require("../middleware/verifySignup");

var _People = require("../middleware/permissions/People.Permission");

var _PA_people = require("../controllers/PA_people.Controllers");

var router = (0, _express.Router)();
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _People.PeopleView], _PA_people.GetPeoples);
router.get("/:COD_PEOPLE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _People.PeopleView], _PA_people.GetPeople);
router.put("/:COD_PEOPLE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _People.PeopleUpdate], _PA_people.UpdatePeople);
router["delete"]("/:COD_PEOPLE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _People.PeopleDelete], _PA_people.DeletePeople);
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _People.PeopleCreate], _PA_people.CreatePeople);
var _default = router;
exports["default"] = _default;
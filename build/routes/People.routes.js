"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../middleware/verifySignup"),
    verifyToken = _require.verifyToken,
    verifyIndUser = _require.verifyIndUser;

var _require2 = require("../middleware/permissions/People.Permission"),
    PeopleView = _require2.PeopleView,
    PeopleCreate = _require2.PeopleCreate,
    PeopleDelete = _require2.PeopleDelete,
    PeopleUpdate = _require2.PeopleUpdate;

var _require3 = require("../controllers/PA_people.Controllers"),
    GetPeoples = _require3.GetPeoples,
    GetPeople = _require3.GetPeople,
    CreatePeople = _require3.CreatePeople,
    UpdatePeople = _require3.UpdatePeople,
    DeletePeople = _require3.DeletePeople;

router.get("/", [verifyToken, verifyIndUser, PeopleView], GetPeoples);
router.get("/:COD_PEOPLE", [verifyToken, verifyIndUser, PeopleView], GetPeople);
router.put("/:COD_PEOPLE", [verifyToken, verifyIndUser, PeopleUpdate], UpdatePeople);
router["delete"]("/:COD_PEOPLE", [verifyToken, verifyIndUser, PeopleDelete], DeletePeople);
router.post("/", [verifyToken, verifyIndUser, PeopleCreate], CreatePeople);
module.exports = router;
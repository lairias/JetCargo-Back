"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/States.Controllers"),
    GetStates = _require.GetStates,
    GetStatesForCountry = _require.GetStatesForCountry,
    CreateState = _require.CreateState,
    DeleteState = _require.DeleteState,
    UpdateState = _require.UpdateState,
    GetState = _require.GetState;

var _require2 = require("../middleware/verifySignup"),
    verifyIndUser = _require2.verifyIndUser,
    verifyToken = _require2.verifyToken;

var _require3 = require("../middleware/permissions/States.Permission"),
    StatesView = _require3.StatesView,
    StatesCreate = _require3.StatesCreate,
    StatesUpdate = _require3.StatesUpdate,
    StatesDelete = _require3.StatesDelete;

router.get("/country/:COD_COUNTRY", GetStatesForCountry);
router.get("/", [verifyToken, verifyIndUser, StatesView], GetStates);
router.post("/", [verifyToken, verifyIndUser, StatesCreate], CreateState);
router["delete"]("/:COD_STATE", [verifyToken, verifyIndUser, StatesDelete], DeleteState);
router.put("/:COD_STATE", [verifyToken, verifyIndUser, StatesUpdate], UpdateState);
router.get("/:COD_STATE", [verifyToken, verifyIndUser, StatesView], GetState);
module.exports = router;
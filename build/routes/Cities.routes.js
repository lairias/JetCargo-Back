"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Cities.Controllers"),
    GetCities = _require.GetCities,
    CreateCity = _require.CreateCity,
    UpdateCity = _require.UpdateCity,
    DeleteCity = _require.DeleteCity,
    GetCitiesForState = _require.GetCitiesForState;

var _require2 = require("../middleware/verifySignup"),
    verifyToken = _require2.verifyToken,
    verifyIndUser = _require2.verifyIndUser;

var _require3 = require("../middleware/permissions/City.Permission"),
    CityView = _require3.CityView,
    CityCreate = _require3.CityCreate,
    CityUpdate = _require3.CityUpdate,
    CityDelete = _require3.CityDelete;

router.get("/", GetCities);
router.get("/state/:COD_STATE", GetCitiesForState);
router.post("/", [verifyToken, CityCreate], CreateCity);
router.put("/:COD_CITY", [verifyToken, CityUpdate], UpdateCity);
router["delete"]("/:COD_CITY", [verifyToken, CityDelete], DeleteCity);
module.exports = router;
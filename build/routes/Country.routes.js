"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Country.Controllers"),
    GetCountries = _require.GetCountries,
    DeleteCountrie = _require.DeleteCountrie,
    GetCountry = _require.GetCountry,
    UpdateCountrie = _require.UpdateCountrie,
    CreateCountry = _require.CreateCountry;

var _require2 = require("../middleware/permissions/County.Permission"),
    CountryCreate = _require2.CountryCreate,
    CountryDelete = _require2.CountryDelete,
    CountryUpdate = _require2.CountryUpdate,
    CountryView = _require2.CountryView;

var _require3 = require("../middleware/verifySignup"),
    verifyIndUser = _require3.verifyIndUser,
    verifyToken = _require3.verifyToken;

router.get("/", GetCountries);
router.get("/:COD_COUNTRY", [verifyToken, verifyIndUser, CountryView], GetCountry);
router.post("/", [verifyToken, verifyIndUser, CountryCreate], CreateCountry);
router["delete"]("/:COD_COUNTRY", [verifyToken, verifyIndUser, CountryDelete], DeleteCountrie);
router.put("/:COD_COUNTRY", [verifyToken, verifyIndUser, CountryUpdate], UpdateCountrie);
module.exports = router;
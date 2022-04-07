"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Country = require("../controllers/Country.Controllers");

var _County = require("../middleware/permissions/County.Permission");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/", _Country.GetCountries);
router.get("/:COD_COUNTRY", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _County.CountryView], _Country.GetCountry);
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _County.CountryCreate], _Country.CreateCountry);
router["delete"]("/:COD_COUNTRY", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _County.CountryDelete], _Country.DeleteCountrie);
router.put("/:COD_COUNTRY", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _County.CountryUpdate], _Country.UpdateCountrie);
var _default = router;
exports["default"] = _default;
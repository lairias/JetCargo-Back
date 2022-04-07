"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Cities = require("../controllers/Cities.Controllers");

var _verifySignup = require("../middleware/verifySignup");

var _City = require("../middleware/permissions/City.Permission");

var router = (0, _express.Router)();
router.get("/", _Cities.GetCities);
router.get("/state/:COD_STATE", _Cities.GetCitiesForState);
router.post("/", [_verifySignup.verifyToken, _City.CityCreate], _Cities.CreateCity);
router.put("/:COD_CITY", [_verifySignup.verifyToken, _City.CityUpdate], _Cities.UpdateCity);
router["delete"]("/:COD_CITY", [_verifySignup.verifyToken, _City.CityDelete], _Cities.DeleteCity);
var _default = router;
exports["default"] = _default;
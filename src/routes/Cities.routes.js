const express = require("express");
const router = express.Router();
const {
  GetCities,
  CreateCity,
  UpdateCity,
  DeleteCity,
  GetCitiesAdmin,
  GetCitiesForState,
} =require( "../controllers/Cities.Controllers")

const { verifyToken, verifyIndUser } =require( "../middleware/verifySignup")
const {
  CityView,
  CityCreate,
  CityUpdate,
  CityDelete,
} =require( "../middleware/permissions/City.Permission")



router.get("/", GetCities);

router.get("/admin", GetCitiesAdmin);

router.get("/state/:COD_STATE", GetCitiesForState);

router.post("/", [verifyToken, CityCreate], CreateCity);
router.put("/:COD_CITY", [verifyToken, CityUpdate], UpdateCity);
router.delete("/:COD_CITY", [verifyToken, CityDelete], DeleteCity);


module.exports = router;

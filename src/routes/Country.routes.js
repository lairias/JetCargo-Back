const express = require("express");
const router = express.Router();
const {
  GetCountries,
  DeleteCountrie,
  GetCountry,
  UpdateCountrie,
  CreateCountry,
  GetCountriesAdmin
} =require( "../controllers/Country.Controllers")
const {
  CountryCreate,
  CountryDelete,
  CountryUpdate,
  CountryView,
} =require( "../middleware/permissions/County.Permission")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")


router.get("/", GetCountries);
router.get("/admin",[verifyToken, verifyIndUser], GetCountriesAdmin);
router.get(
  "/:COD_COUNTRY",
  [verifyToken, verifyIndUser, CountryView],
  GetCountry
);
router.post("/", [verifyToken, verifyIndUser, CountryCreate], CreateCountry);
router.delete(
  "/:COD_COUNTRY",
  [verifyToken, verifyIndUser, CountryDelete],
  DeleteCountrie
);
router.put(
  "/:COD_COUNTRY",
  [verifyToken, verifyIndUser, CountryUpdate],
  UpdateCountrie
);

module.exports = router;

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

const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")


router.get("/", GetCountries);
router.get("/admin",[verifyToken, verifyIndUser], GetCountriesAdmin);
router.get(
  "/:COD_COUNTRY",
  [verifyToken, verifyIndUser],
  GetCountry
);
router.post("/", [verifyToken, verifyIndUser], CreateCountry);
router.delete(
  "/:COD_COUNTRY",
  [verifyToken, verifyIndUser],
  DeleteCountrie
);
router.put(
  "/:COD_COUNTRY",
  [verifyToken, verifyIndUser],
  UpdateCountrie
);

module.exports = router;

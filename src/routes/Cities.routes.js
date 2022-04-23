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

router.get("/", GetCities);

router.get("/admin", GetCitiesAdmin);

router.get("/state/:COD_STATE", GetCitiesForState);
router.post("/", [verifyToken, verifyIndUser], CreateCity);
router.put("/:COD_CITY", [verifyToken, verifyIndUser], UpdateCity);
router.delete("/:COD_CITY", [verifyToken, verifyIndUser], DeleteCity);


module.exports = router;

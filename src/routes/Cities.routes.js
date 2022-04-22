const express = require("express");
const router = express.Router();
const {
  GetCities,
  CreateCity,
  UpdateCity,
  DeleteCity,
  GetCitiesForState,
} =require( "../controllers/Cities.Controllers")

const { verifyToken, verifyIndUser } =require( "../middleware/verifySignup")

router.get("/", GetCities);
router.get("/admin", GetCities);
router.get("/state/:COD_STATE", GetCitiesForState);
router.post("/", [verifyToken, verifyIndUser], CreateCity);
router.put("/:COD_CITY", [verifyToken, verifyIndUser], UpdateCity);
router.delete("/:COD_CITY", [verifyToken, verifyIndUser], DeleteCity);


module.exports = router;

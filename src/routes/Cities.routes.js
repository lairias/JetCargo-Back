import { Router } from "express";
import {
  GetCities,
  CreateCity,
  UpdateCity,
  DeleteCity,
  GetCitiesForCountry,
} from "../controllers/Cities.Controllers";

import {verifyToken,verifyIndUser} from "../middleware/verifySignup"
import {
  CityView,
  CityCreate,
  CityUpdate,
  CityDelete,
} from "../middleware/permissions/City.Permission";

const router = Router();

router.get("/", [verifyToken, verifyIndUser, CityView], GetCities);
router.get("/country/:COD_COUNTRY", [verifyToken, verifyIndUser, CityView], GetCitiesForCountry);
router.post("/", [verifyToken, CityCreate], CreateCity);
router.put("/:COD_CITY", [verifyToken, CityUpdate], UpdateCity);
router.delete("/:COD_CITY", [verifyToken, CityDelete], DeleteCity);

export default router;

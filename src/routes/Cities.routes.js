import { Router } from "express";
import {
  GetCities,
  CreateCity,
  UpdateCity,
  DeleteCity,
  GetCitiesForCountry,
} from "../controllers/Cities.Controllers";

import {verifyToken,verifyIndUser} from "../middleware/verifySignup"
import { CityView} from "../middleware/verifyPermisos";

const router = Router();

router.get("/", [verifyToken, verifyIndUser, CityView], GetCities);
router.get("/country/:COD_COUNTRY", [verifyToken, verifyIndUser, CityView], GetCitiesForCountry);
router.post("/", CreateCity);
router.put("/:COD_CITY", UpdateCity);
router.delete("/:COD_CITY", DeleteCity);

export default router;

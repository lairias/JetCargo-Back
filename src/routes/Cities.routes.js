import { Router } from "express";
import {
  GetCities,
  CreateCity,
  UpdateCity,
  DeleteCity,
  GetCitiesForCountry,
} from "../controllers/Cities.Controllers";

import {verifyToken,verifyIndUser} from "../middleware/verifySignup"
const router = Router();

router.get("/", [verifyToken, verifyIndUser], GetCities);
router.get("/country/:COD_COUNTRY", GetCitiesForCountry);
router.post("/", CreateCity);
router.put("/:COD_CITY", UpdateCity);
router.delete("/:COD_CITY", DeleteCity);

export default router;

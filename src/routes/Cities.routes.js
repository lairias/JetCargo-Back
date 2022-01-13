import { Router } from "express";
import {
  GetCities,
  CreateCity,
  UpdateCity,
  DeleteCity,
  GetCitiesForCountry,
} from "../controllers/Cities.Controllers";

const router = Router();

router.get("/", GetCities);
router.get("/country/:COD_COUNTRY", GetCitiesForCountry);
router.post("/", CreateCity);
router.put("/:COD_CITY", UpdateCity);
router.delete("/:COD_CITY", DeleteCity);

export default router;

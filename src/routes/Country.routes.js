import { Router } from "express";
import {
  GetCountries,
  DeleteCountrie,
  GetCountry,
  UpdateCountrie,
  CreateCountry,
} from "../controllers/Country.Controllers";

const router = Router();
router.get("/", GetCountries);
router.get("/:COD_COUNTRY", GetCountry);
router.post("/", CreateCountry);
router.delete("/:COD_COUNTRY", DeleteCountrie);
router.put("/:COD_COUNTRY", UpdateCountrie);

export default router;

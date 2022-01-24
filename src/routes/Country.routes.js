import { Router } from "express";
import { GetCountries,  DeleteCountrie,  GetCountry,  UpdateCountrie,  CreateCountry,} from "../controllers/Country.Controllers";
import {CountryCreate,CountryDelete,CountryUpdate,CountryView} from "../middleware/permissions/County.Permission"
import {verifyIndUser,verifyToken} from "../middleware/verifySignup"

const router = Router();
router.get("/", [verifyToken, verifyIndUser, CountryView], GetCountries);
router.get("/:COD_COUNTRY", [verifyToken, verifyIndUser, CountryView], GetCountry);
router.post("/", [verifyToken, verifyIndUser, CountryCreate], CreateCountry);
router.delete("/:COD_COUNTRY", [verifyToken, verifyIndUser, CountryDelete], DeleteCountrie);
router.put("/:COD_COUNTRY", [verifyToken, verifyIndUser, CountryUpdate], UpdateCountrie);
export default router;

import { Router } from "express";
import { GetCountries } from "../controllers/Country.Controllers";

const router = Router();

router.get("/", GetCountries);

export default router;

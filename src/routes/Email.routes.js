import { Router } from "express";
import { VeryEmail } from "../controllers/Email.Controllers";

const router = Router();

router.get("/very/:COD_USER/:EMAIL/:TOKEN", VeryEmail);

export default router;

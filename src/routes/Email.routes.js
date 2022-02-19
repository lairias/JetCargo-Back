import { Router } from "express";
import { VeryEmail,GetEmail } from "../controllers/Email.Controllers";

const router = Router();

router.get("/very/:COD_USER/:EMAIL/:TOKEN", VeryEmail);
router.get("/:EMAIL", GetEmail);

export default router;

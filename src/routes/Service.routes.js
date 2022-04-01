import { Router } from "express";
import { GetService } from "../controllers/Service.controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get("/", [verifyToken, verifyIndUser], GetService);
export default router;

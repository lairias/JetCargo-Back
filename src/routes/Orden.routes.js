import { Router } from "express";
import {
    GetOrdenTracking
} from "../controllers/Orden.controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get("/:COD_TRACKING", [verifyToken, verifyIndUser], GetOrdenTracking);


export default router;

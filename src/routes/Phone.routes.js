import { Router } from "express";
import { GetPhoneLocker } from "../controllers/Phone.controllers";
import { verifyToken, verifyIndUser } from "../middleware/verifySignup";

const router = Router();
router.get("/locker/:COD_LOCKER", [verifyToken, verifyIndUser], GetPhoneLocker);

export default router;

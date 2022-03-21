import { Router } from "express";
import {
CancelCreateOrden,CaptureOrden,CreateOrden
} from "../controllers/Payment.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get("/create-orden", [verifyToken, verifyIndUser, LockerView], CreateOrden);
router.get("/capture-orden", [verifyToken, verifyIndUser, LockerView], CancelCreateOrden,CaptureOrden,CreateOrden
);
router.get("/cancel-create-orden", [verifyToken, verifyIndUser, LockerView], CancelCreateOrden);

export default router;

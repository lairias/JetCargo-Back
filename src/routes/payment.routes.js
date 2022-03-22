import { Router } from "express";
import {
CancelCreateOrden,CaptureOrden,CreateOrden
} from "../controllers/Payment.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.post("/create-orden", [verifyToken, verifyIndUser], CreateOrden);
router.get("/capture-orden/:COD_CUSTOMER/:NAM_TRACKING/:COD_PACKAGE", [verifyToken, verifyIndUser], CaptureOrden,
);
router.get("/cancel-create-orden", [verifyToken, verifyIndUser], CancelCreateOrden);

export default router;


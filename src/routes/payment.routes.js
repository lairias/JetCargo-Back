import { Router } from "express";
import {
CancelCreateOrden,CaptureOrden,CreateOrden
} from "../controllers/Payment.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.post("/create-orden", [verifyToken, verifyIndUser], CreateOrden);
router.get("/capture-orden", [verifyToken, verifyIndUser], CancelCreateOrden,CaptureOrden,CreateOrden
);
router.get("/cancel-create-orden", [verifyToken, verifyIndUser], CancelCreateOrden);

export default router;

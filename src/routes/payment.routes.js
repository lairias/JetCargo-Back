import { Router } from "express";
import {
  CancelCreateOrden,
  CaptureOrden,
  CreateOrden,
} from "../controllers/Payment.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.post("/create-orden", CreateOrden);
router.get(
  "/capture-orden/:COD_CUSTOMER/:COD_TRACKING/:COD_PACKAGE",
  CaptureOrden
);
router.get("/cancel-create-orden", CancelCreateOrden);

export default router;

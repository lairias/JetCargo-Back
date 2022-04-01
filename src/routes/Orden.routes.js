import { Router } from "express";
import { GetOrdenTracking,GetOrdenByTracking,GetOrdenByNumberTracking} from "../controllers/Orden.controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get("/:COD_TRACKING", [verifyToken, verifyIndUser], GetOrdenTracking);
router.get("/tracking_cod/:COD_TRACKING", [verifyToken, verifyIndUser], GetOrdenByTracking);
router.get("/tracking_number/:NUM_TRACKING", [verifyToken, verifyIndUser], GetOrdenByNumberTracking);

export default router;

import { Router } from "express";
import { CreateTracking, GetTrackingsNumberService } from "../controllers/Tracking.Controllers";
import { TrackingNotOrden } from "../middleware/permissions/Tracking.Permission";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get(
  "/search/:COD_SERVICE/:NUM_TRACKING",
  [verifyToken, verifyIndUser, ],
  GetTrackingsNumberService
);
router.get(
  "/",
  [verifyToken, verifyIndUser, ],
  TrackingNotOrden
);
router.post(
  "/",
  [verifyToken, verifyIndUser, ],
  CreateTracking
);
export default router;

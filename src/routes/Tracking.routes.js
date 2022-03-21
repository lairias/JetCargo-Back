import { Router } from "express";
import { CreateTracking, GetTrackingsNumberService, UpdateTracking,GetTracking_not_orden } from "../controllers/Tracking.Controllers";
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
router.get(
  "/:COD_TRACKING/:COD_PACKAGE/:NUM_LOCKER/:COD_CUSTOMER",
  [verifyToken, verifyIndUser, ],
  GetTracking_not_orden
);
router.post(
  "/",
  [verifyToken, verifyIndUser, ],
  CreateTracking
);
router.put(
  "/:COD_TRACKING",
  [verifyToken, verifyIndUser, ],
  UpdateTracking
);
export default router;

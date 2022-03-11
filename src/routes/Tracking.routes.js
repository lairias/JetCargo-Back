import { Router } from "express";
import { GetTrackingsNumberService } from "../controllers/Tracking.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get(
  "/search/:COD_SERVICE/:NUM_TRACKING",
  [verifyToken, verifyIndUser, ],
  GetTrackingsNumberService
);
export default router;

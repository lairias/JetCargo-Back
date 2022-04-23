const express = require("express");
const router = express.Router();
const {
  CreateTracking,
  GetTrackingsNumberService,
  GetTrackingsNumber,
  UpdateTracking,
  GetTracking_not_orden,
  TrackingNotOrdenType,
  TrackingNotOrden,
  TrackingNotOrdenCustomer,
  GetTracking,
  GetTrackingId
} =require( "../controllers/Tracking.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get(
  "/search/:COD_SERVICE/:NUM_TRACKING",
  [verifyToken, verifyIndUser],
  GetTrackingsNumberService
);
router.get(
  "/search/:NUM_TRACKING",
  [verifyToken, verifyIndUser],
  GetTrackingsNumber
);

router.get(
  "/received/:RECEIVED_TRACKING",
  [verifyToken, verifyIndUser],
  TrackingNotOrden
);
router.get(
  "/received/:RECEIVED_TRACKING/:COD_CUSTOMER/:NUM_TRACKING",
  [verifyToken, verifyIndUser],
  TrackingNotOrdenCustomer
);

router.get(
  "/type/:COD_TYPEPACKAGE/:RECEIVED_TRACKING",
  [verifyToken, verifyIndUser],
  TrackingNotOrdenType
);

router.get(
  "/:COD_TRACKING/:COD_PACKAGE/:NUM_LOCKER/:COD_CUSTOMER",
  [verifyToken, verifyIndUser],
  GetTracking_not_orden
);
router.get("/:NUM_TRACKING", [verifyToken, verifyIndUser], GetTrackingsNumber);
router.get("/GetBytracking/:COD_TRACKING", [verifyToken, verifyIndUser], GetTracking);
router.post("/", [verifyToken, verifyIndUser], CreateTracking);
router.put("/:COD_TRACKING", [verifyToken, verifyIndUser], UpdateTracking);
router.get("/admin/:COD_TRACKING", [verifyToken, verifyIndUser], GetTrackingId);

module.exports = router;

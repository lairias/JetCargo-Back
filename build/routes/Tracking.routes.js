"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Tracking = require("../controllers/Tracking.Controllers");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/search/:COD_SERVICE/:NUM_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.GetTrackingsNumberService);
router.get("/search/:NUM_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.GetTrackingsNumber);
router.get("/received/:RECEIVED_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.TrackingNotOrden);
router.get("/received/:RECEIVED_TRACKING/:COD_CUSTOMER/:NUM_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.TrackingNotOrdenCustomer);
router.get("/type/:COD_TYPEPACKAGE/:RECEIVED_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.TrackingNotOrdenType);
router.get("/:COD_TRACKING/:COD_PACKAGE/:NUM_LOCKER/:COD_CUSTOMER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.GetTracking_not_orden);
router.get("/:NUM_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.GetTrackingsNumber);
router.get("/GetBytracking/:COD_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.GetTracking);
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.CreateTracking);
router.put("/:COD_TRACKING", [_verifySignup.verifyToken, _verifySignup.verifyIndUser], _Tracking.UpdateTracking);
var _default = router;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Locker = require("../controllers/Locker.Controllers");

var _Lockers = require("../middleware/permissions/Lockers.Permission");

var _verifySignup = require("../middleware/verifySignup");

var router = (0, _express.Router)();
router.get("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerView], _Locker.GetLokers);
router.get("/ind", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerView], _Locker.GetLokersind);
router.get("/:COD_LOCKER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerView], _Locker.GetLoker);
router.get("/people/:COD_PEOPLE", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerView], _Locker.GetLokerByPeople);
router.get("/customer/:COD_CUSTOMER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerView], _Locker.GetLokerByCustomer);
router.post("/customer", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerCreate], _Locker.CreateLokerCustomers);
router.post("/", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerCreate], _Locker.CreateLoker);
router["delete"]("/:COD_LOCKER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerDelete], _Locker.DeleteLoker);
router.put("/:COD_LOCKER", [_verifySignup.verifyToken, _verifySignup.verifyIndUser, _Lockers.LockerUpdate], _Locker.UpdateLoker);
var _default = router;
exports["default"] = _default;
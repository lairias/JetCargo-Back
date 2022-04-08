"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/Locker.Controllers"),
    GetLokers = _require.GetLokers,
    DeleteLoker = _require.DeleteLoker,
    GetLoker = _require.GetLoker,
    GetLokerByPeople = _require.GetLokerByPeople,
    GetLokerByCustomer = _require.GetLokerByCustomer,
    UpdateLoker = _require.UpdateLoker,
    GetLokersind = _require.GetLokersind,
    CreateLoker = _require.CreateLoker,
    CreateLokerCustomers = _require.CreateLokerCustomers;

var _require2 = require("../middleware/permissions/Lockers.Permission"),
    LockerCreate = _require2.LockerCreate,
    LockerDelete = _require2.LockerDelete,
    LockerUpdate = _require2.LockerUpdate,
    LockerView = _require2.LockerView;

var _require3 = require("../middleware/verifySignup"),
    verifyIndUser = _require3.verifyIndUser,
    verifyToken = _require3.verifyToken;

router.get("/", [verifyToken, verifyIndUser, LockerView], GetLokers);
router.get("/ind", [verifyToken, verifyIndUser, LockerView], GetLokersind);
router.get("/:COD_LOCKER", [verifyToken, verifyIndUser, LockerView], GetLoker);
router.get("/people/:COD_PEOPLE", [verifyToken, verifyIndUser, LockerView], GetLokerByPeople);
router.get("/customer/:COD_CUSTOMER", [verifyToken, verifyIndUser, LockerView], GetLokerByCustomer);
router.post("/customer", [verifyToken, verifyIndUser, LockerCreate], CreateLokerCustomers);
router.post("/", [verifyToken, verifyIndUser, LockerCreate], CreateLoker);
router["delete"]("/:COD_LOCKER", [verifyToken, verifyIndUser, LockerDelete], DeleteLoker);
router.put("/:COD_LOCKER", [verifyToken, verifyIndUser, LockerUpdate], UpdateLoker);
module.exports = router;
const express = require("express");
const router = express.Router();
const {
  GetLokers,
  DeleteLoker,
  GetLoker,
  GetLokerByPeople,
  GetLokerByCustomer,
  UpdateLoker,
  GetLokersAdmin,
  GetLokersind,
  CreateLoker,
  CreateLokerCustomers,
} =require( "../controllers/Locker.Controllers")
const {
  LockerCreate,
  LockerDelete,
  LockerUpdate,
  LockerView,
} =require( "../middleware/permissions/Lockers.Permission")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/", [verifyToken, verifyIndUser, LockerView], GetLokers);
router.get("/admin", [verifyToken, verifyIndUser, LockerView], GetLokersAdmin);
router.get("/ind", [verifyToken, verifyIndUser, LockerView], GetLokersind);
router.get("/:COD_LOCKER", [verifyToken, verifyIndUser, LockerView], GetLoker);

router.get(
  "/people/:COD_PEOPLE",
  [verifyToken, verifyIndUser, LockerView],
  GetLokerByPeople
);
router.get(
  "/customer/:COD_CUSTOMER",
  [verifyToken, verifyIndUser, LockerView],
  GetLokerByCustomer
);
router.post(
  "/customer",
  [verifyToken, verifyIndUser, LockerCreate],
  CreateLokerCustomers
);

router.post("/admin", [verifyToken, verifyIndUser, LockerCreate], CreateLoker);
router.delete(
  "/:COD_LOCKER",
  [verifyToken, verifyIndUser, LockerDelete],
  DeleteLoker
);
router.put(
  "/admin/:COD_LOCKER",
  [verifyToken, verifyIndUser, LockerUpdate],
  UpdateLoker
);


module.exports = router;

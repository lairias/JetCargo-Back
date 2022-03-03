import { Router } from "express";
import {
  GetLokers,
  DeleteLoker,
  GetLoker,
  GetLokerByPeople,
  GetLokerByCustomer,
  UpdateLoker,
  CreateLoker,
  CreateLokerCustomers
} from "../controllers/Locker.Controllers";
import {
  LockerCreate,
  LockerDelete,
  LockerUpdate,
  LockerView,
} from "../middleware/permissions/Lockers.Permission";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get("/", [verifyToken, verifyIndUser, LockerView], GetLokers);
router.get("/:COD_LOCKER", [verifyToken, verifyIndUser, LockerView], GetLoker);

router.get("/people/:COD_PEOPLE", [verifyToken, verifyIndUser, LockerView], GetLokerByPeople);
router.get("/customer/:COD_CUSTOMER", [verifyToken, verifyIndUser, LockerView], GetLokerByCustomer);
router.post("/customer", [verifyToken, verifyIndUser, LockerCreate], CreateLokerCustomers);

router.post("/", [verifyToken, verifyIndUser, LockerCreate], CreateLoker);
router.delete(
  "/:COD_LOCKER",
  [verifyToken, verifyIndUser, LockerDelete],
  DeleteLoker
);
router.put(
  "/:COD_LOCKER",
  [verifyToken, verifyIndUser, LockerUpdate],
  UpdateLoker
);

export default router;

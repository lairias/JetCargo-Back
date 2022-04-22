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

const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/", [verifyToken, verifyIndUser], GetLokers);
router.get("/admin", [verifyToken, verifyIndUser], GetLokersAdmin);
router.get("/ind", [verifyToken, verifyIndUser], GetLokersind);
router.get("/:COD_LOCKER", [verifyToken, verifyIndUser], GetLoker);

router.get(
  "/people/:COD_PEOPLE",
  [verifyToken, verifyIndUser],
  GetLokerByPeople
);
router.get(
  "/customer/:COD_CUSTOMER",
  [verifyToken, verifyIndUser],
  GetLokerByCustomer
);
router.post(
  "/customer",
  [verifyToken, verifyIndUser],
  CreateLokerCustomers
);

router.post("/admin", [verifyToken, verifyIndUser], CreateLoker);
router.delete(
  "/:COD_LOCKER",
  [verifyToken, verifyIndUser],
  DeleteLoker
);
router.put(
  "/admin/:COD_LOCKER",
  [verifyToken, verifyIndUser],
  UpdateLoker
);


module.exports = router;

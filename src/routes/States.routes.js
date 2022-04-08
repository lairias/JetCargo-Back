const express = require("express");
const router = express.Router();
const {
  GetStates,
  GetStatesForCountry,
  CreateState,
  DeleteState,
  UpdateState,
  GetState,
} =require( "../controllers/States.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")
const {
  StatesView,
  StatesCreate,
  StatesUpdate,
  StatesDelete,
} =require( "../middleware/permissions/States.Permission")


router.get("/country/:COD_COUNTRY", GetStatesForCountry);
router.get("/", [verifyToken, verifyIndUser, StatesView], GetStates);
router.post("/", [verifyToken, verifyIndUser, StatesCreate], CreateState);
router.delete(
  "/:COD_STATE",
  [verifyToken, verifyIndUser, StatesDelete],
  DeleteState
);
router.put(
  "/:COD_STATE",
  [verifyToken, verifyIndUser, StatesUpdate],
  UpdateState
);
router.get("/:COD_STATE", [verifyToken, verifyIndUser, StatesView], GetState);


module.exports = router;

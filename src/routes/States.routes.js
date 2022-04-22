const express = require("express");
const router = express.Router();
const {
  GetStates,
  GetStatesForCountry,
  CreateState,
  DeleteState,
  UpdateState,
  GetState,
  GetStatesAdmin
} =require( "../controllers/States.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")



router.get("/country/:COD_COUNTRY", GetStatesForCountry);
router.get("/", [verifyToken, verifyIndUser], GetStates);
router.get("/admin", [verifyToken, verifyIndUser], GetStatesAdmin);
router.post("/", [verifyToken, verifyIndUser], CreateState);
router.delete(
  "/:COD_STATE",
  [verifyToken, verifyIndUser],
  DeleteState
);
router.put(
  "/:COD_STATE",
  [verifyToken, verifyIndUser],
  UpdateState
);
router.get("/:COD_STATE", [verifyToken, verifyIndUser], GetState);


module.exports = router;

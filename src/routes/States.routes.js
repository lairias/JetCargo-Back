import { Router } from "express";
import {
  GetStates,
  GetStatesForCountry,
  CreateState,
  DeleteState,
  UpdateState,
  GetState,
} from "../controllers/States.Controllers";
import { verifyIndUser,verifyToken} from "../middleware/verifySignup"
import {
  StatesView,  StatesCreate,  StatesUpdate,  StatesDelete,} from "../middleware/permissions/States.Permission";

const router = Router();

router.get("/country/:COD_COUNTRY",  [verifyToken, verifyIndUser, StatesView],  GetStatesForCountry);
router.get("/", [verifyToken, verifyIndUser, StatesView], GetStates);
router.post("/", [verifyToken, verifyIndUser, StatesCreate], CreateState);
router.delete("/:COD_STATE", [verifyToken, verifyIndUser, StatesDelete], DeleteState);
router.put("/:COD_STATE", [verifyToken, verifyIndUser, StatesUpdate], UpdateState);
router.get("/:COD_STATE", [verifyToken, verifyIndUser, StatesView], GetState);

export default router;

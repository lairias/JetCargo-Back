import { Router } from "express";
import {
  GetStates,
  GetStatesForCountry,
  CreateState,
  DeleteState,
  UpdateState,
  GetState,
} from "../controllers/States.Controllers";

const router = Router();

router.get("/country/:COD_COUNTRY", GetStatesForCountry);
router.get("/", GetStates);
router.post("/", CreateState);
router.delete("/:COD_STATE", DeleteState);
router.put("/:COD_STATE", UpdateState);
router.get("/:COD_STATE", GetState);

export default router;

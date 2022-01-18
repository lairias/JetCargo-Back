import { Router } from "express";
import {
  GetLokers,
  DeleteLoker,
  GetLoker,
  UpdateLoker,
  CreateLoker,
} from "../controllers/Locker.Controllers";

const router = Router();
router.get("/", GetLokers);
router.get("/:COD_LOCKER", GetLoker);
router.post("/", CreateLoker);
router.delete("/:COD_LOCKER", DeleteLoker);
router.put("/:COD_LOCKER", UpdateLoker);

export default router;

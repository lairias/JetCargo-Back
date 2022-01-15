import { Router } from "express";
import {
  CreatePassReset,
  DeletePassReset,
  GetAllPassReset,
  GetPassReset,
  UpdatePassReset,
} from "../controllers/PassReset.Controllers";

const router = Router();

router.post("/", CreatePassReset);
router.get("/", GetAllPassReset);
router.get("/:EMAIL", GetPassReset);
router.delete("/:EMAIL", DeletePassReset);
router.put("/:EMAIL", UpdatePassReset);

export default router;

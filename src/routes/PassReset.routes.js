import { Router } from "express";
import {
  CreatePassReset,
  DeletePassReset,
  GetAllPassReset,
  GetPassReset,
  UpdatePassReset,
} from "../controllers/PassReset.Controllers";
import { verifyTokenPass } from "../middleware/verifyPassReset";
const router = Router();

router.post("/", CreatePassReset);
router.get("/", [verifyTokenPass], GetAllPassReset);
router.get("/:EMAIL", GetPassReset);
router.delete("/:EMAIL", DeletePassReset);

export default router;

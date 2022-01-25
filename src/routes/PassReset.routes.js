import { Router } from "express";
import {
  CreatePassReset,
  DeletePassReset,
  ForgotPassword,
  GetPassReset,
  UpdatePassReset,
} from "../controllers/PassReset.Controllers";
import { verifyTokenPass } from "../middleware/verifyPassReset";
const router = Router();

router.post("/", CreatePassReset);
router.get(
  "/reset-password/:COD_USER/:CORREO/:TOKEN",
  [verifyTokenPass],
  ForgotPassword
);
router.get("/:EMAIL", GetPassReset);
router.delete("/:EMAIL", DeletePassReset);

export default router;

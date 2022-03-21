import { Router } from "express";
import { GetSeguridadID } from "../controllers/Seguridad.controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get(
  "/:COD_SEGURIDAD",
  GetSeguridadID
);
export default router;

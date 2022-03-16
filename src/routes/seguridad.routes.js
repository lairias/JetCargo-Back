import { Router } from "express";
import { GetSeguridadID } from "../controllers/Seguridad.controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get(
  "/:COD_PERMISO",
  [verifyToken, verifyIndUser, ],
  GetSeguridadID
);
export default router;

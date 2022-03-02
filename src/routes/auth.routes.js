import { Router } from "express";
import {
  singIn,
  singUp,
  RevalidarToken,
} from "../controllers/Auth.controllers";
import { CheckDuplicateEmail } from "../middleware/verifyEmail";
import { renewToken } from "../middleware/tokens/renewToken";
const router = Router();
router.post("/signup", CheckDuplicateEmail, singUp);
router.post("/signin", singIn);
router.get("/renew", renewToken, RevalidarToken);
export default router;

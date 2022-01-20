import { Router } from "express";
import { singIn, singUp } from "../controllers/Auth.controllers";
import { CheckDuplicateEmail } from "../middleware/verifyEmail";

const router = Router();

router.post("/signup",CheckDuplicateEmail, singUp);
router.post("/signin", singIn);

export default router;

import { Router } from "express";
import {PostMenssge} from "../controllers/Messaje.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get(
  "/new",
  PostMenssge
);



export default router;

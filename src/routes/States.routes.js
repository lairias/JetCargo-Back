import { Router } from "express";
import {
  GetStates,
} from "../controllers/States.Controllers";

const router = Router();

router.get("/", GetStates);

export default router;

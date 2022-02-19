GetPermissionUser
import { Router } from "express";
import {
    GetPermissionUser
} from "../controllers/Permission.controllers";

import {verifyIndUser, verifyToken} from "../middleware/verifySignup";
const router = Router();
router.get("/user/:COD_USER", GetPermissionUser);

export default router;

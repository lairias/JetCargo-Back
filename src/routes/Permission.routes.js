GetPermissionUser
import { Router } from "express";
import {
    GetPermissionUser
} from "../controllers/Permission.controllers";

import {verifyIndUser, verifyToken} from "../middleware/verifySignup";
const router = Router();
router.get("/",[verifyToken, verifyIndUser ], GetPermissionUser);

export default router;

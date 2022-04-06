import { Router } from "express";
import {
 GetInformationInvoceByCustomer
} from "../controllers/Invoice.Controllers";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();
router.get("/:COD_USER",[verifyToken, verifyIndUser], GetInformationInvoceByCustomer);
export default router;

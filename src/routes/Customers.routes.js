import { Router } from "express";
import {
    GetCustomers,
} from "../controllers/Customers.Controllers";
import {
  CustomerCreate,
  CustomerDelete,
  CustomerUpdate,
  CustomerView,
} from "../middleware/permissions/Customer.Permission";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";

const router = Router();
router.get("/", [verifyToken, verifyIndUser, CustomerView],GetCustomers );
export default router;

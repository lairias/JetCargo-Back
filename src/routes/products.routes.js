import { Router } from "express";
import { verifyToken } from "../middleware/verifySignup";
import {
  CreateProduct,
  DeleteProduct,
  GetProduct,
  GetProducts,
  UpdateProduct,
} from "../controllers/PA_people.Controllers";

const router = Router();

router.get("/", verifyToken, GetProducts);
router.post("/", CreateProduct);
router.get("/:productId", GetProduct);
router.put("/:productId", UpdateProduct);
router.delete("/:productId", DeleteProduct);

export default router;

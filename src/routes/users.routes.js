import { Router } from "express";
import { verifyToken } from "../middleware/verifySignup";
import {
  CreateUser,
  DeleteUser,
  GetUser,
  GetUsers,
  UpdateUser,
} from "../controllers/PA_people.Controllers";

const router = Router();
router.post("/", CreateUser);
router.get("/:COD_USER", GetUser);
router.get("/", verifyToken , GetUsers);
router.put("/:COD_USER", UpdateUser);
router.delete("/:COD_USER", DeleteUser);

export default router;

import { Router } from "express";
import {
  GetTypeUsers,
  CreateTypeUser,
  DeleteTypeUser,
  UpdateTypeUser,
  GetTypeUser,
} from "../controllers/TypeUsers.Controllers";

const router = Router();

router.get("/country/:COD_COUNTRY", GetTypeUsersForCountry);
router.get("/", GetTypeUsers);
router.post("/", CreateTypeUser);
router.delete("/:COD_TYPEUSER", DeleteTypeUser);
router.put("/:COD_TYPEUSER", UpdateTypeUser);
router.get("/:COD_TYPEUSER", GetTypeUser);

export default router;

import { Router } from "express";
import { verifyToken, verifyIndUser } from "../middleware/verifySignup";
import {
  PeopleView,
  PeopleCreate,
  PeopleDelete,
  PeopleUpdate,
} from "../middleware/permissions/People.Permission";
import {
  GetPeoples,
  GetPeople,
  CreatePeople,
  UpdatePeople,
  DeletePeople,
} from "../controllers/PA_people.Controllers";
const router = Router();
router.get("/", [verifyToken, verifyIndUser, PeopleView], GetPeoples);
router.get("/:COD_PEOPLE", [verifyToken, verifyIndUser, PeopleView], GetPeople);
router.put(
  "/:COD_PEOPLE",
  [verifyToken, verifyIndUser, PeopleUpdate],
  UpdatePeople
);
router.delete(
  "/:COD_PEOPLE",
  [verifyToken, verifyIndUser, PeopleDelete],
  DeletePeople
);
router.post("/", [verifyToken, verifyIndUser, PeopleCreate], CreatePeople);

export default router;

const express = require("express");
const router = express.Router();
const { verifyToken, verifyIndUser } =require( "../middleware/verifySignup")
const {
  PeopleView,
  PeopleCreate,
  PeopleDelete,
  PeopleUpdate,
} =require( "../middleware/permissions/People.Permission")
const {
  GetPeoples,
  GetPeople,
  CreatePeople,
  UpdatePeople,
  DeletePeople,
} =require( "../controllers/PA_people.Controllers")

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


module.exports = router;

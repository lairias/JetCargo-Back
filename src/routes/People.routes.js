const express = require("express");
const router = express.Router();
const { verifyToken, verifyIndUser } =require( "../middleware/verifySignup")

const {
  GetPeoples,
  GetPeople,
  CreatePeople,
  UpdatePeople,
  DeletePeople,
} =require( "../controllers/PA_people.Controllers")

router.get("/", [verifyToken, verifyIndUser], GetPeoples);
router.get("/:COD_PEOPLE", [verifyToken, verifyIndUser], GetPeople);
router.put(
  "/:COD_PEOPLE",
  [verifyToken, verifyIndUser],
  UpdatePeople
);
router.delete(
  "/:COD_PEOPLE",
  [verifyToken, verifyIndUser],
  DeletePeople
);
router.post("/", [verifyToken, verifyIndUser], CreatePeople);


module.exports = router;

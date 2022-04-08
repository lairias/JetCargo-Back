const express = require("express");
const router = express.Router();
const { PostMenssge } =require( "../controllers/Messaje.Controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/new", PostMenssge);


module.exports = router;

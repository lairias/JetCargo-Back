const express = require("express");
const router = express.Router();
const { PostMenssge } =require( "../controllers/Messaje.Controllers")

router.get("/new", PostMenssge);


module.exports = router;

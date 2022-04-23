const express = require("express");
const router = express.Router();
const { GetErrores } =require( "../controllers/Errores.Controllers")
router.get("/", GetErrores);
module.exports = router;

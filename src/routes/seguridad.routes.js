const express = require("express");
const router = express.Router();
const { GetSeguridadID } =require( "../controllers/Seguridad.controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/:COD_SEGURIDAD", GetSeguridadID);

module.exports = router;

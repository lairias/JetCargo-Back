const express = require("express");
const router = express.Router();
const { GetSeguridadID,GetSeguridad,UpdateSeguridaID } =require( "../controllers/Seguridad.controllers")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")

router.get("/:COD_SEGURIDAD",[verifyToken,verifyIndUser], GetSeguridadID);
router.get("/",[verifyToken,verifyIndUser], GetSeguridad);
router.put("/:COD_SEGURIDAD",[verifyToken,verifyIndUser], UpdateSeguridaID);

module.exports = router;

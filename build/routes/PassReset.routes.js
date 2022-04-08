"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/PassReset.Controllers"),
    CreatePassReset = _require.CreatePassReset,
    DeletePassReset = _require.DeletePassReset,
    ForgotPassword = _require.ForgotPassword,
    GetPassReset = _require.GetPassReset,
    UpdatePassReset = _require.UpdatePassReset,
    VeryTokenReset = _require.VeryTokenReset;

var _require2 = require("../middleware/verifyPassReset"),
    verifyTokenPass = _require2.verifyTokenPass;

router.post("/", CreatePassReset);
router.post("/reset-password/:COD_USER/:CORREO/:TOKEN", [verifyTokenPass], ForgotPassword);
router.get("/:EMAIL", GetPassReset);
router["delete"]("/:EMAIL", DeletePassReset);
module.exports = router;
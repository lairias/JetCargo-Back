const express = require("express");
const router = express.Router();
const {
  CreateTrackingInformation,
  GetTrackinInformationOrigen,
  GetTrackinInformationDestino,
  GetOrigenDestinoAllTracking,
  GetTrackinInformationDestinoOrigenAll,
  GetOrigenDestinoAllTrackingAdministrador,
  OrigenGetTrackinOne,
  DestinoGetTrackinOne,
  UpdateTrackingInformation,
} =require( "../controllers/TrackinInformation.controller")
const { verifyIndUser, verifyToken } =require( "../middleware/verifySignup")


router.post("/admin", [verifyToken, verifyIndUser], CreateTrackingInformation);
router.put("/", [verifyToken, verifyIndUser], UpdateTrackingInformation);
router.get(
  "/destino/:COD_DESTINO",
  [verifyToken, verifyIndUser],
  DestinoGetTrackinOne
);
router.get(
  "/inicio/:COD_INICIO",
  [verifyToken, verifyIndUser],
  OrigenGetTrackinOne
);
router.get(
  "/origenDestino/:COD_ORDEN",
  [verifyToken, verifyIndUser],
  GetOrigenDestinoAllTracking
);
router.get(
  "/origenDestinoAdministrador/:COD_ORDEN",
  [verifyToken, verifyIndUser],
  GetOrigenDestinoAllTrackingAdministrador
);
router.get(
  "/origenDestinoAll/:COD_ORDEN",
  [verifyToken, verifyIndUser],
  GetTrackinInformationDestinoOrigenAll
);

router.get(
  "/origen/:COD_ORDEN",
  [verifyToken, verifyIndUser],
  GetTrackinInformationOrigen
);

router.get(
  "/destino/:COD_ORDEN",
  [verifyToken, verifyIndUser],
  GetTrackinInformationDestino
);


module.exports = router;

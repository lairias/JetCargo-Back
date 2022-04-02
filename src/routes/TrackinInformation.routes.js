import { Router } from "express";
import {
  CreateTrackingInformation,
  GetTrackinInformationOrden,
  GetTrackinInformationOrigen,
GetTrackinInformationDestino,
GetOrigenDestinoAllTracking,
GetTrackinInformationDestinoOrigenAll,
GetOrigenDestinoAllTrackingAdministrador
} from "../controllers/TrackinInformation.controller";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();

router.post("/", [verifyToken, verifyIndUser], CreateTrackingInformation);

router.get(
  "/orden/:COD_ORDEN",
  [verifyToken, verifyIndUser],
  GetTrackinInformationOrden
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

export default router;

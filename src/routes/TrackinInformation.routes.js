import { Router } from "express";
import { CreateTrackingInformation,GetTrackinInformationOrden} from "../controllers/TrackinInformation.controller";
import { verifyIndUser, verifyToken } from "../middleware/verifySignup";
const router = Router();

router.post(
  "/",
  [verifyToken, verifyIndUser],
  CreateTrackingInformation
);
router.get(
  "/orden/:COD_ORDEN",
  [verifyToken, verifyIndUser],
  GetTrackinInformationOrden
);
export default router;
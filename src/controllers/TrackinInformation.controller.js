import sequelize from "../config/database/index";

import { HttpError } from "../helpers/handleError";
import { DE_ORDEN } from "../models/DE_orden";
import { DE_TRACKING_INFORMATION } from "../models/DE_trackingInformation";
export const CreateTrackingInformation = async (req, res, next) => {
    const {COD_TRACKING} = req.params;
  try {
    const catPackage = await DE_TRACKING_INFORMATION.findOne({ where: { COD_TRACKING }});
    return res.status(200).json({ok:true, catPackage});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetTrackinInformationOrden = async (req, res, next) => {
    const {COD_ORDEN} = req.params;
  try {
    const TrackinInformationOrden = await DE_TRACKING_INFORMATION.findOne({ where: { COD_ORDEN }});
    if(!JSON.stringify(TrackinInformationOrden[0])) return res.status(200).json({ok:false, TrackinInformationOrden: false});
    return res.status(200).json({ok:true, TrackinInformationOrden});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

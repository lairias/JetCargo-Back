import sequelize from "../config/database/index";

import { HttpError } from "../helpers/handleError";
import { DE_ORDEN } from "../models/DE_orden";
export const GetOrdenTracking = async (req, res, next) => {
    const {COD_TRACKING} = req.params;
  try {
    const OrdenTracking = await DE_ORDEN.findOne({ where: { COD_TRACKING }});
    return res.status(200).json(OrdenTracking);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

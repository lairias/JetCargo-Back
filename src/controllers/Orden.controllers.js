import sequelize from "../config/database/index";

import { HttpError } from "../helpers/handleError";
import { DE_ORDEN } from "../models/DE_orden";
export const GetOrdenTracking = async (req, res, next) => {
  const { COD_TRACKING } = req.params;
  try {
    const OrdenTracking = await DE_ORDEN.findOne({ where: { COD_TRACKING } });
    if (!JSON.stringify(OrdenTracking[0]))
      return res.status(200).json({ ok: false, OrdenTracking: false });
    return res.status(200).json({ ok: true, OrdenTracking });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetOrdenByTracking = async (req, res, next) => {
  const { COD_TRACKING } = req.params;
  try {
    const OrdenTracking = await DE_ORDEN.findOne({ where: { COD_TRACKING } });
    if (!Boolean(JSON.stringify(OrdenTracking.COD_ORDEN)))
      return res.status(200).json({ ok: false, OrdenTracking: false });
    return res.status(200).json( OrdenTracking );
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetOrdenByNumberTracking = async (req, res, next) => {
  const { NUM_TRACKING } = req.params;
  console.log(NUM_TRACKING);
  try {
    const OrdenTracking = await sequelize.query("CALL SHOW_ORDEN_NUMBER_TRACKIN(:NUM_TRACKING)", {
      replacements: { NUM_TRACKING },
    });
    return res.status(200).json( OrdenTracking );
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

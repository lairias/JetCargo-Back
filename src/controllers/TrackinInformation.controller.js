import sequelize from "../config/database/index";

import { HttpError } from "../helpers/handleError";
import { DE_ORDEN } from "../models/DE_orden";
import { DE_TRACKING_INFORMATION_ORIGEN } from "../models/DE_trackingInformationOrigin";
import { DE_TRACKING_INFORMATION_DESTINO } from "../models/DE_trackingInformationDestino";
import { REL_ORIGIN_DESTINO } from "../models/relations/REL_Origin_Destino";
export const CreateTrackingInformation = async (req, res, next) => {
  const {Direcciones, OrdenTrankings} = req.body;
  try {
    
  const Origen= await DE_TRACKING_INFORMATION_ORIGEN.create({
      COD_ORDEN : OrdenTrankings.COD_ORDEN,
      COD_ORIGIN_COUNTRY  : Direcciones.COD_COUNTRY_ORIGIN,
      COD_ORIGIN_STATE : Direcciones.COD_STATE_ORIGIN,
      COD_ORIGIN_CITY:Direcciones.COD_CITY_ORIGIN,
      CHECKPOINT_DELIVERY_STATUS : "DELIVERED"
    });
   const Destino=   await DE_TRACKING_INFORMATION_DESTINO.create({
      COD_ORDEN : OrdenTrankings.COD_ORDEN,
      COD_DESTINATION_COUNTRY:Direcciones.COD_COUNTRY_DESTINO,
      COD_DESTINATION_STATE : Direcciones.COD_STATE_DESTINO,
      COD_DESTINATION_CITY: Direcciones.COD_CITY_DESTINO ,
      CHECKPOINT_DELIVERY_STATUS : "PENDING"
    });
    await REL_ORIGIN_DESTINO.create({
      COD_ORDEN : OrdenTrankings.COD_ORDEN,
      COD_DESTINO  : Destino.dataValues.COD_TRACKINFORMATION_DESTINO,
      COD_ORIGIN : Origen.dataValues.COD_TRACKINFORMATION_ORIGIN,
    })
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};

export const GetTrackinInformationOrden = async (req, res, next) => {
  const { COD_ORDEN } = req.params;
  // try {
  //   const TrackinInformationOrden = await DE_TRACKING_INFORMATION_DESTINO.findOne({
  //   });
   
  //   if (TrackinInformationOrden === null)
  //     return res
  //       .status(203)
  //       .json({ ok: false, TrackinInformationOrden: false });
  //   return res.status(200).json({ ok: true, TrackinInformationOrden });
  // } catch (error) {
  //   HttpError(res, error);
  //   next();
  // }
};
export const GetOrigenDestinoAllTracking = async (req, res, next) => {
  const { COD_ORDEN } = req.params;
  try {
    const OrriginDestino = await REL_ORIGIN_DESTINO.findOne({
      where: { COD_ORDEN },
    });
   
    if (OrriginDestino === null)
      return res
        .status(203)
        .json({ ok: false, OrriginDestino: false });
    return res.status(200).json({ ok: true, OrriginDestino });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetTrackinInformationOrigen = async (req, res, next) => {
  const { COD_ORDEN } = req.params;
  try {
    const OrigenOrden = await sequelize.query("CALL SHOW_ORIGEN_ORDEN(:COD_ORDEN)",{
      replacements: { COD_ORDEN },
    });
   
    if (OrigenOrden === null)
      return res
        .status(203)
        .json({ ok: false, OrigenOrden: false });
    return res.status(200).json({ ok: true, OrigenOrden });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetTrackinInformationDestino = async (req, res, next) => {
  const { COD_ORDEN } = req.params;
  try {
    const DestinoOrden = await sequelize.query("CALL SHOW_DESTINO_ORDEN(:COD_ORDEN)",{
      replacements: { COD_ORDEN },
    });
   
    if (DestinoOrden === null)
      return res
        .status(203)
        .json({ ok: false, DestinoOrden: false });
    return res.status(200).json({ ok: true, DestinoOrden });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


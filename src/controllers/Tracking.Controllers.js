import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { HttpError } from "../helpers/handleError";
import sequelize from "../config/database";
export const GetTracking = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetTrackings = async (req, res, next) => {
  try {
    await PA_TypeUsers.findAll();
    return res.status(200).json();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetTrackingsNumberService = async (req, res, next) => {
  const {COD_SERVICE, NUM_TRACKING } = req.params;
  try {
    const resultado = await sequelize.query("CALL SHOW_TRACKING_SERVICE_ID(:COD_SERVICE,:NUM_TRACKING)",{
      replacements: {
        COD_SERVICE,
        NUM_TRACKING
      },
    });
    if(!JSON.stringify(resultado[0])) return res.status(200).json({ok:false, TrackingNumber: false});
    return res.status(200).json({ok:true,TrackingNumber:resultado });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const UpdateTracking = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const DeleteTracking = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CreateTracking = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

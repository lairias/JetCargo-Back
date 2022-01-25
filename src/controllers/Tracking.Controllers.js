import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { HttpError } from "../helpers/handleError";

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

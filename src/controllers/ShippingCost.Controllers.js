import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { HttpError } from "../helpers/handleError";

export const GetShippingCost = async (req, res, next) => {
  try {
    
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetShippingCosts = async (req, res, next) => {
  try {
     await PA_TypeUsers.findAll();
  return   res.sendStatus(200).json();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const UpdateShippingCost = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const DeleteShippingCost = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CreateShippingCost = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

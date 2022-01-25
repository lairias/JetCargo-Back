import { Op } from "sequelize";
import { PA_STATES } from "../models/Pa_states";
import sequelize from "../config/database/index";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";
export const GetTypeUsers = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
   return  res.sendStatus(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const CreateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
   return  res.sendStatus(200).json(cities);
  } catch (error) {
    next();
  }
};
export const DeleteTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
   return  res.sendStatus(200).json(cities);
  } catch (error) {
    next();
  }
};
export const UpdateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
   return  res.sendStatus(200).json(cities);
  } catch (error) {
    next();
  }
};
export const GetTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
   return  res.sendStatus(200).json(cities);
  } catch (error) {
    next();
  }
};

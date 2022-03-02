import { PA_TypeUsers } from "../models/Pa_typeUsers";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";
export const GetTypeUsers = async (req, res, next) => {
  try {
    const cities = await PA_TypeUsers.findAll();
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CreateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    return res.status(200).json(cities);
  } catch (error) {
    next();
  }
};
export const DeleteTypeUser = async (req, res, next) => {
  try {
    await PA_TypeUsers.destroy({});
    return res.sendStatus(200);
  } catch (error) {
    next();
  }
};
export const UpdateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    return res.status(200).json(cities);
  } catch (error) {
    next();
  }
};
export const GetTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    return res.status(200).json(cities);
  } catch (error) {
    next();
  }
};

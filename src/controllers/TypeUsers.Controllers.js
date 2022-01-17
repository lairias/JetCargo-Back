import { Op } from "sequelize";
import { PA_STATES } from "../models/Pa_states";
import sequelize from "../config/database/index";

export const GetTypeUsers = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const CreateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const DeleteTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const UpdateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const GetTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
import { PA_COUNTRIES } from "../models/Pa_countries";
import sequelize from "../config/database/index";

export const GetCountries = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findAll();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

export const GetCountry = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findbyPk();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const CreateCountry = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findbyPk();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const DeleteCountrie = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findbyPk();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const UpdateCountrie = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findbyPk();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

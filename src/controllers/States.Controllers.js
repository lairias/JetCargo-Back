import { Op } from "sequelize";
import { PA_STATES } from "../models/Pa_states";
import sequelize from "../config/database/index";

export const GetStates = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({ offset: 5, limit: 5 });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const GetStatesForCountry = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_STATES.findAll({
      where: {
        COD_COUNTRY: {
          [Op.eq]: COD_COUNTRY,
        },
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const DeleteState = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_STATES.findAll({
      where: {
        COD_COUNTRY: {
          [Op.eq]: COD_COUNTRY,
        },
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const UpdateState = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_STATES.findAll({
      where: {
        COD_COUNTRY: {
          [Op.eq]: COD_COUNTRY,
        },
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const CreateState = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_STATES.findAll({
      where: {
        COD_COUNTRY: {
          [Op.eq]: COD_COUNTRY,
        },
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const GetState = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_STATES.findAll({
      where: {
        COD_COUNTRY: {
          [Op.eq]: COD_COUNTRY,
        },
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

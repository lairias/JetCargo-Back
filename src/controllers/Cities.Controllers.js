import { PA_CITIES } from "../models/Pa_cities";
import { PA_STATES } from "../models/Pa_states";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";

export const GetCitiesForState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  try {
    const cities = await sequelize.query("CALL SHOW_CITY_STATE(:COD_STATE)", {
      replacements: { COD_STATE },
    });
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const GetCities = async (req, res, next) => {
  try {
    const cities = await PA_CITIES.findAll();
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

export const CreateCity = async (req, res, next) => {
  const {
    NAM_CITY,
    ZIP_CODE,
    POS_CODE,
    POPULATION,
    CURRENCY,
    TIMEZONE,
    DES_CITY,
    USR_ADD,
    COD_STATE,
  } = req.body;

  try {
    const cities = await sequelize.query(
      `CALL INS_CITIES(
      :NAM_CITY,
      :ZIP_CODE,
      :POS_CODE,
      :POPULATION,
      :CURRENCY,
      :TIMEZONE,
      :DES_CITY,
      :USR_ADD,
     :COD_STATE)`,
      {
        replacements: {
          NAM_CITY,
          ZIP_CODE,
          POS_CODE,
          POPULATION,
          CURRENCY,
          TIMEZONE,
          DES_CITY,
          USR_ADD,
          COD_STATE,
        },
      }
    );
    return  res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

export const UpdateCity = async (req, res, next) => {
  const {
    NAM_CITY,
    ZIP_CODE,
    POS_CODE,
    POPULATION,
    CURRENCY,
    TIMEZONE,
    DES_CITY,
    USR_UPD,
    COD_STATE,
  } = req.body;

  const { COD_CITY } = req.params;
  try {
    const cities = await sequelize.query(
      `CALL UPD_CITIES(
        :COD_CITY,
      :NAM_CITY,
      :ZIP_CODE,
      :POS_CODE,
      :POPULATION,
      :CURRENCY,
      :TIMEZONE,
      :DES_CITY,
      :USR_UPD,
     :COD_STATE)`,
      {
        replacements: {
          COD_CITY,
          NAM_CITY,
          ZIP_CODE,
          POS_CODE,
          POPULATION,
          CURRENCY,
          TIMEZONE,
          DES_CITY,
          USR_UPD,
          COD_STATE,
        },
      }
    );
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

export const DeleteCity = async (req, res, next) => {
  const { COD_CITY } = req.params;
  try {
    const cities = await PA_CITIES.destroy({
      where: {
        COD_CITY,
      },
    });
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

export const GetCity = async (req, res, next) => {
  const { COD_CITY } = req.params;
  try {
    const cities = await PA_CITIES.findByPk({
      WHERE: {
        COD_CITY,
      },
    });
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

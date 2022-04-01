import { PA_COUNTRIES } from "../models/Pa_countries";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";

export const GetCountries = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findAll({ where: { IND_COUNTRY: 1 } });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const GetCountry = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_COUNTRIES.findByPk(COD_COUNTRY);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const CreateCountry = async (req, res, next) => {
  const { NAM_COUNTRY, DES_COUNTRY, USR_ADD } = req.body;
  try {
    const cities = await sequelize
      .query("CALL INS_COUNTRY(:NAM_COUNTRY,:DES_COUNTRY,:USR_ADD)", {
        replacements: {
          NAM_COUNTRY,
          DES_COUNTRY,
          USR_ADD,
        },
      })
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const DeleteCountrie = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_COUNTRIES.destroy({
      where: {
        COD_COUNTRY,
      },
    }).catch((error) => {
      console.log(error);
      HttpError(res, error);
      throw res.sendStatus(500);
    });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const UpdateCountrie = async (req, res, next) => {
  const { NAM_COUNTRY, DES_COUNTRY, USR_UPD } = req.body;
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await sequelize.query(
      "CALL UPD_COUNTRY(:COD_COUNTRY,:NAM_COUNTRY,:DES_COUNTRY,:USR_UPD)",
      {
        replacements: {
          COD_COUNTRY,
          NAM_COUNTRY,
          DES_COUNTRY,
          USR_UPD,
        },
      }
    );
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

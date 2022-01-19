import { PA_CITIES } from "../models/Pa_cities";
import { PA_STATES } from "../models/Pa_states";
import sequelize from "../config/database/index";

export const GetCitiesForCountry = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({
      include: { PA_CITIES },
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
export const GetCities = async (req, res, next) => {
  try {
    const cities = await PA_CITIES.findAll();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
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
    // const cities = await PA_CITIES.create({
    //   NAM_CITY,
    //   ZIP_CODE,
    //   POS_CODE,
    //   POPULATION,
    //   CURRENCY,
    //   TIMEZONE,
    //   DES_CITY,
    //   USR_ADD,
    //   COD_STATE,
    // });

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
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
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
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
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
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
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
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

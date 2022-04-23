const  PA_CITIES  = require( "../models/Pa_cities")
const sequelize = require( "../config/database/index")
const  {HttpError}  = require( "../helpers/handleError")

exports.GetCitiesForState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  try {
    const cities = await sequelize.query("CALL SHOW_CITY_STATE(:COD_STATE)", {
      replacements: { COD_STATE },
    });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetCitiesAdmin = async (req, res, next) => {
  try {
    const cities = await sequelize.query("CALL SHOW_CITY_STATEALL()");
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetCities = async (req, res, next) => {
  try {
    const cities = await PA_CITIES.findAll({ where: { IND_CITY: 1 } });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetCitiesAdmin = async (req, res, next) => {
  try {
    const cities = await sequelize.query("CALL SHOW_CITY_STATE_ALL()");
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.CreateCity = async (req, res, next) => {
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
    const cities = await sequelize
      .query(
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
      )
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.UpdateCity = async (req, res, next) => {
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
    const cities = await sequelize
      .query(
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
      )
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.DeleteCity = async (req, res, next) => {
  const { COD_CITY } = req.params;
  try {
    const cities = await PA_CITIES.destroy({
      where: {
        COD_CITY,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.GetCity = async (req, res, next) => {
  const { COD_CITY } = req.params;
  try {
    const cities = await PA_CITIES.findByPk({
      WHERE: {
        COD_CITY,
      },
    });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


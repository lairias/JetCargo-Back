const  PA_STATES  =require( "../models/Pa_states")
const  {HttpError}  =require( "../helpers/handleError")
const sequelize =require( "../config/database/index");
const PA_COUNTRIES = require("../models/Pa_countries");

 exports.GetStates = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({ where: { IND_STATE: 1 } });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetStatesAdmin = async (req, res, next) => {
  try {
    const cities = await sequelize
      .query("CALL SHOW_STATES_COUNTRYALL()")
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};
 exports.GetStatesForCountry = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await sequelize
      .query("CALL SHOW_STATES_COUNTRY(:COD_COUNTRY)", {
        replacements: { COD_COUNTRY },
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
 exports.DeleteState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  try {
    await PA_STATES.destroy({ where: { COD_STATE } });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.UpdateState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  const { NAM_STATE, DES_STATE, USR_UPD, COD_COUNTRY,IND_STATE } = req.body;
  console.log(req.body)
  try {
    await PA_STATES.update({COD_COUNTRY,NAM_STATE,DES_STATE,IND_STATE,USR_UPD},{where:{COD_STATE}})
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CreateState = async (req, res, next) => {
  const { NAM_STATE, DES_STATE, COD_COUNTRY,USR_ADD} = req.body;
  try {
    await PA_STATES.create({
      NAM_STATE, DES_STATE, USR_ADD, COD_COUNTRY
    })
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  try {
    const cities = await PA_STATES.findOne({ where: { COD_STATE } });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


const  PA_COUNTRIES  = require( "../models/Pa_countries")
const sequelize = require( "../config/database/index")
const  {HttpError}  = require( "../helpers/handleError")

exports.GetCountries = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findAll({ where: { IND_COUNTRY: 1 } });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetCountriesAdmin = async (req, res, next) => {
  try {
    const cities = await PA_COUNTRIES.findAll();
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.GetCountry = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await PA_COUNTRIES.findByPk(COD_COUNTRY);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.CreateCountry = async (req, res, next) => {
  try {
    await PA_COUNTRIES.create(req.body);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.DeleteCountrie = async (req, res, next) => {
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
exports.UpdateCountrie = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
   await PA_COUNTRIES.update(req.body,{where:{COD_COUNTRY}});
    return res.status(200).json({ok:true});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


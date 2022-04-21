//
const  {HttpError}  =require( "../helpers/handleError")
require('dotenv').config()
const  DE_SERVICE  =require( "../models/DE_service")

exports.GetService = async (req, res, next) => {
  try {
    const service = await DE_SERVICE.findAll();
    res.status(200).json({ ok: true, service });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetServiceInd = async (req, res, next) => {
  try {
    const service = await DE_SERVICE.findAll({where:{IND_SERVICE:1}});
    res.status(200).json({ ok: true, service });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


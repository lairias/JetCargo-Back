const  PA_TypeUsers  =require( "../models/Pa_typeUsers")
const sequelize =require( "../config/database/index")
const  {HttpError}  =require( "../helpers/handleError")
 exports.GetTypeUsers = async (req, res, next) => {
  try {
    const cities = await PA_TypeUsers.findAll();
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CreateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    return res.status(200).json(cities);
  } catch (error) {
    next();
  }
};
 exports.DeleteTypeUser = async (req, res, next) => {
  try {
    await PA_TypeUsers.destroy({});
    return res.sendStatus(200);
  } catch (error) {
    next();
  }
};
 exports.UpdateTypeUser = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({});
    return res.status(200).json(cities);
  } catch (error) {
    next();
  }
};
 exports.GetTypeUser = async (req, res, next) => {
  const {COD_TYPEUSERS} = req.params;
  try {

    const cities = await PA_TypeUsers.findOne({
      where: {
        COD_TYPEUSERS
      }
    });
    return res.status(200).json(cities);
  } catch (error) {
    next();
  }
};


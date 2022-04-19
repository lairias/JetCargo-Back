const  PA_TypeUsers  =require("../models/Pa_typeUsers")
const  {HttpError}  =require("../helpers/handleError")
const BO_SHIPPINGCOST = require("../models/BO_ShippingCost")
 exports.GetShippingCost = async (req, res, next) => {
  try {
    const {COD_SHIPPINGCOST} = req.params;
    const costoType = await BO_SHIPPINGCOST.findOne({
      where:{
        COD_SHIPPINGCOST
      }
    })
    return res.status(200).json(costoType)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetShippingCosts = async (req, res, next) => {
  try {
    await PA_TypeUsers.findAll();
    return res.status(200).json();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.UpdateShippingCost = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.DeleteShippingCost = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CreateShippingCost = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


const  PA_TypeUsers  =require("../models/Pa_typeUsers")
const  {HttpError}  =require("../helpers/handleError")
const BO_SHIPPINGCOST = require("../models/BO_ShippingCost")
 exports.GetShippingCost = async (req, res, next) => {
   const {COD_SHIPPINGCOST} = req.params;
  try {
    const costoType = await BO_SHIPPINGCOST.findByPk(COD_SHIPPINGCOST);
    console.log(COD_SHIPPINGCOST);
    console.log(costoType);
    return res.status(200).json(costoType)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetShippingCostALL = async (req, res, next) => {
  try {
    const costoType = await BO_SHIPPINGCOST.findAll();
    return res.status(200).json(costoType);
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
    await BO_SHIPPINGCOST.create(req.body)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetShippingCostUpdate = async (req, res, next) => {
   const {COD_SHIPPINGCOST} = req.params;
   console.log(req.body)
  try {
    await BO_SHIPPINGCOST.update(req.body,{where:{COD_SHIPPINGCOST}})
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


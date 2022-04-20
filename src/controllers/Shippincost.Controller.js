//
const  {HttpError}  =require( "../helpers/handleError");
const BO_SHIPPINGCOST = require("../models/BO_ShippingCost");
require('dotenv').config()

exports.GetShippingCost = async (req, res, next) => {
  try {
    const shipin = await BO_SHIPPINGCOST.findAll();
    res.status(200).json({ ok: true, shipin });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


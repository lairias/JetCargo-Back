//
const   USERS  =require( "../models/Users")
const   HttpError  =require( "../helpers/handleError")
const  { transport, configTransportVery } =require( "../email")
const  { encrptPassword, compararPassword } =require( "../helpers/bcrypt")
const  sequelize =require( "../config/database")
const JWT = require("jsonwebtoken");
require('dotenv').config()

exports.UpdateUser = async (req, res, next) => {
  const { PROFILE_PHOTO_PATH, EMAIL } = req.body;
  const { COD_USER } = req.params;
  try {
    await sequelize.query("CALL UPD_USER()", { replacements: { COD_USER } });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

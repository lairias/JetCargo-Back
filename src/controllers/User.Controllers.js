//
const   USERS  =require( "../models/Users")
const   PA_POEPLE=require( "../models/Pa_people")
const   PA_PHONES=require( "../models/Pa_phones")
const   PA_ADDRES=require( "../models/Pa_addres")
const   MODEL_HAS_ROLES=require( "../models/relations/MODEL_has_typeUser")
const   {HttpError}  =require( "../helpers/handleError")
const  { transport, configTransportVery } =require( "../email")
const  { encrptPassword, compararPassword } =require( "../helpers/bcrypt")
const  sequelize =require( "../config/database")
const JWT = require("jsonwebtoken");
require('dotenv').config()

exports.UpdateUserAdmin = async (req, res, next) => {
  try {
    const {
      COD_USER,
      COD_PEOPLE,
      COD_PHONE,
      COD_ADDRESS,
      ID,
      IND_USR,
      EMAIL_VERIFIED,
      TIP_DOCUMENT,
      FRISTNAME,
      MIDDLENAME,
      LASTNAME,
      AGE,
      EMAIL,
      COD_TYPEUSERS,
      DAT_BIRTH,
      COD_COUNTRY,
      COD_STATE,
      COD_CITY,
      DES_ADDRESS,
      NUM_AREA,
      COD_LOCKER,
      NUM_PHONE,
    } = req.body;
    
    console.log(req.body)
    await USERS.update({
      EMAIL,
      IND_USR,
      EMAIL_VERIFIED,
    },{where:{COD_USER}});
  await  PA_POEPLE.update({ID,TIP_DOCUMENT,FRISTNAME,MIDDLENAME,LASTNAME,AGE,DAT_BIRTH},{where:{COD_PEOPLE}});
  await  PA_PHONES.update({NUM_AREA,NUM_PHONE},{where:{COD_PHONE}});
  await  PA_ADDRES.update({COD_COUNTRY,COD_STATE,COD_CITY,DES_ADDRESS},{where:{COD_ADDRESS}});
  await  MODEL_HAS_ROLES.update({COD_TYPEUSERS},{where:{COD_USER}});

   
    return res.status(201).json({
      ok:true,
    });
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};


exports.GetUsers = async (req, res, next) => {
  try {
    const ususarios = await sequelize.query("CALL SHOW_USERS_TABLE()");
    return res.status(200).json(ususarios)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetUserAdmin = async (req, res, next) => {
  const {COD_USER} = req.params
  try {
    console.log(COD_USER)
    const ususarios = await sequelize.query("CALL SHOW_USER_EDIT_ADMIN(:COD_USER)",{
      replacements:{ COD_USER}
    });
    return res.status(200).json(ususarios)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.GetUserCustomerAdmin = async (req, res, next) => {
  const {COD_CUSTOMER} = req.params
  try {
    const ususarios = await sequelize.query("CALL SHOW_CUSTOMER_ADMIN(:COD_CUSTOMER)",{
      replacements:{ COD_CUSTOMER}
    });
    return res.status(200).json(ususarios)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

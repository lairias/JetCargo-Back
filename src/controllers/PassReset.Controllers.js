import {Se_PASS_RESET} from "../models/security/SE_pass_reset"
import {USERS} from "../models/Users"

import JWT from "jsonwebtoken"
import middleware from "../middleware"
import config from "../config";

import sequelize from "../config/database/index";

export const CreatePassReset = async (req, res, next) => {
  const {EMAIL} = req.body;
  try {
  const UserFond = await USERS.findOne({ where: {EMAIL} });
  const UserReset = await Se_PASS_RESET.findOne({ where: { EMAIL } });
  if(!UserFond) return res.status(401).json({ token: null, message: "User no encontrado"});
  const token = JWT.sign(
    { email: UserFond.EMAIL, id: UserFond.COD_USER },
    config.JwrSecret_PassReset,
    { expiresIn: 86400}
  );
    if(UserReset){
  await Se_PASS_RESET.update(
    { API_TOKEN: token },
    {
      where: {
        EMAIL,
      },
    }
  );
    }else{
      await Se_PASS_RESET.create({EMAIL,API_TOKEN: token})
    }
  
    res.status(200).json({ token});
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

export const GetAllPassReset = async (req, res, next) => {
  try {
    const cities = await Se_PASS_RESET.findAll();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const GetPassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  try {
    const cities = await Se_PASS_RESET.findAll({
      WHERE: {
        EMAIL,
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const UpdatePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  const { API_TOKEN } = req.body;
  try {

    const cities = await sequelize.query(
      "CALL INS_PASS_RESET(:EMAIL,:API_TOKEN)",
      {
        replacements: {
          EMAIL,
          API_TOKEN,
        },
      }
    );
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const DeletePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  
  try {
    const cities = await Se_PASS_RESET.destroy({
      where: { EMAIL }
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};



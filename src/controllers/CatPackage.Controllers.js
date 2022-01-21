import sequelize from "../config/database/index";
import { BO_CATPACKAGE } from "../models/BO_catPackage";

import { HttpError } from "../helpers/handleError";
export const GetCatPackages = async (req, res, next) => {
  try {
    const cities = await BO_CATPACKAGE.findAll();
    res.status(200).json(cities);
  } catch (error) {
    HttpError(res,error);
    next();
  }
};
export const GetCatPackage = async (req, res, next) => {
    const { COD_CATPACKAGE } = req.params;
  try {
    const cities = await BO_CATPACKAGE.findByPk(COD_CATPACKAGE);
    res.status(200).json(cities);
  } catch (error) {
    HttpError(res,error);
    next();
  }
};
export const CreateCatPackage = async (req, res, next) => {
    const { NAM_CATPACKAGE, DES_CATPACKAGE, USR_ADD } = req.body;
  try {
    const cities = await sequelize.query("CALL INS_CATPACKAGES(:NAM_CATPACKAGE,:DES_CATPACKAGE,:USR_ADD)",
    {replacements:{
NAM_CATPACKAGE,
DES_CATPACKAGE,
USR_ADD,
      }});
    res.status(200).json(cities);
  } catch (error) {
    HttpError(res,error);
    next();
  }
};
export const UpdateCatPackage = async (req, res, next) => {
     const { NAM_CATPACKAGE, DES_CATPACKAGE, USR_UPD } = req.body;
       const { COD_CATPACKAGE } = req.params;
  try {
    const cities = await sequelize.query(
      "CALL UPD_CATPACKAGES(:COD_CATPACKAGE,:NAM_CATPACKAGE,:DES_CATPACKAGE,:USR_UPD)",
      {
        replacements: {
            COD_CATPACKAGE,
          NAM_CATPACKAGE,
          DES_CATPACKAGE,
          USR_UPD,
        },
      }
    );
    res.status(200).json(cities);
  } catch (error) {
    HttpError(res,error);
    next();
  }
};
export const DeleteCatPackage = async (req, res, next) => {
        const { COD_CATPACKAGE } = req.params;

  try {
    const cities = await BO_CATPACKAGE.destroy({
      where: {
        COD_CATPACKAGE,
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    HttpError(res,error);
    next();
  }
};

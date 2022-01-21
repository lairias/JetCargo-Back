import { BO_TYPEPACKAGE } from "../models/BO_typePackage";
import sequelize from "../config/database/index";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";
export const GetTypePackages = async (req, res, next) => {
  try {
    const cities = await BO_TYPEPACKAGE.findAll();
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

export const GetTypePackage = async (req, res, next) => {
  const { COD_TYPEPACKAGE } = req.params;
  try {
    const cities = await BO_TYPEPACKAGE.findByPk(COD_TYPEPACKAGE);
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

export const CreateTypePackage = async (req, res, next) => {
  const { NAM_TYPEPACKAGE, DES_TYPEPACKAGE, USR_ADD } = req.body;
  try {
    const cities = await sequelize.query(
      "CALL INS_TYPEPACKAGE(:NAM_TYPEPACKAGE,:DES_TYPEPACKAGE,:USR_ADD)",
      {
        replacements: {
          NAM_TYPEPACKAGE,
          DES_TYPEPACKAGE,
          USR_ADD,
        },
      }
    );
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const DeleteTypePackage = async (req, res, next) => {
  const { COD_TYPEPACKAGE } = req.params;
  try {
    const cities = await BO_TYPEPACKAGE.destroy({
      where: {
        COD_TYPEPACKAGE,
      },
    });
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const UpdateTypePackage = async (req, res, next) => {
  const { NAM_TYPEPACKAGE, DES_TYPEPACKAGE, USR_UPD } = req.body;
  const { COD_TYPEPACKAGE } = req.params;
  try {
    const cities = await sequelize.query(
      "CALL UPD_TYPEPACKAGE(:COD_TYPEPACKAGE,:NAM_TYPEPACKAGE,:DES_TYPEPACKAGE,:USR_UPD)",
      {
        replacements: {
          COD_TYPEPACKAGE,
          NAM_TYPEPACKAGE,
          DES_TYPEPACKAGE,
          USR_UPD,
        },
      }
    );
    res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

import { BO_LOCKER } from "../models/BO_locker";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";
export const GetLokers = async (req, res, next) => {
  try {
    const cities = await BO_LOCKER.findAll();
    return res.sendStatus(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const GetLoker = async (req, res, next) => {
  const { COD_LOCKER } = req.params;
  try {
    const cities = await BO_LOCKER.findByPk(COD_LOCKER);
    return res.sendStatus(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const CreateLoker = async (req, res, next) => {
  const { COD_PEOPLE, NUM_LOCKER, TYP_LOCKER, USR_ADD } = req.body;
  try {
    const cities = await sequelize.query(
      "CALL INS_LOCKER(:COD_PEOPLE,:NUM_LOCKER,:TYP_LOCKER, :USR_ADD)",
      {
        replacements: {
          COD_PEOPLE,
          NUM_LOCKER,
          TYP_LOCKER,
          USR_ADD,
        },
      }
    );
    return res.sendStatus(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const DeleteLoker = async (req, res, next) => {
  const { COD_LOCKER } = req.params;
  try {
    const cities = await BO_LOCKER.destroy({
      where: {
        COD_LOCKER,
      },
    });
    return res.sendStatus(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const UpdateLoker = async (req, res, next) => {
  const { COD_PEOPLE, NUM_LOCKER, TYP_LOCKER, IND_LOCKER, USR_UPD } = req.body;
  const { COD_LOCKER } = req.params;
  try {
    const cities = await sequelize.query(
      "CALL UPD_LOCKER(:COD_LOCKER,:COD_PEOPLE,:NUM_LOCKER,:TYP_LOCKER,:USR_UPD,:IND_LOCKER)",
      {
        replacements: {
          COD_LOCKER,
          COD_PEOPLE,
          NUM_LOCKER,
          TYP_LOCKER,
          USR_UPD,
          IND_LOCKER
        },
      }
    );
    return res.sendStatus(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

import { PA_POEPLE } from "../models/Pa_people";
import sequelize from "../config/database";
import { HttpError } from "../helpers/handleError";

export const GetPeoples = async (req, res, next) => {
  try {
    const people = await PA_POEPLE.findAll();
    return res.status(200).json(people);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetPeople = async (req, res, next) => {
  const { COD_PEOPLE } = req.params;
  try {
    const people = await PA_POEPLE.findByPk(COD_PEOPLE);
    return res.status(200).json(people);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const DeletePeople = async (req, res, next) => {
  const { COD_PEOPLE } = req.params;
  try {
    await PA_POEPLE.destroy({ where: { COD_PEOPLE } });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const CreatePeople = async (req, res, next) => {
  const {
    ID,
    TIP_DOCUMENT,
    FRISTNAME,
    MIDDLENAME,
    LASTNAME,
    AGE,
    TIP_PERSON,
    USR_ADD,
  } = req.body;
  try {
    const people = await sequelize
      .query(
        "CALL INS_PEOPLE( :ID, :TIP_DOCUMENT,:FRISTNAME,:MIDDLENAME,:LASTNAME,:AGE,:TIP_PERSON,:USR_ADD)",
        {
          replacements: {
            ID,
            TIP_DOCUMENT,
            FRISTNAME,
            MIDDLENAME,
            LASTNAME,
            AGE,
            TIP_PERSON,
            USR_ADD,
          },
        }
      )
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const UpdatePeople = async (req, res, next) => {
  const {
    ID,
    TIP_DOCUMENT,
    FRISTNAME,
    MIDDLENAME,
    LASTNAME,
    AGE,
    TIP_PERSON,
    USR_UPD,
  } = req.body;
  const { COD_PEOPLE } = req.params;
  try {
    const people = await sequelize
      .query(
        "CALL UPD_PEOPLE( :COD_PEOPLE,:ID, :TIP_DOCUMENT,:FRISTNAME,:MIDDLENAME,:LASTNAME,:AGE,:TIP_PERSON,:USR_UPD)",
        {
          replacements: {
            COD_PEOPLE,
            ID,
            TIP_DOCUMENT,
            FRISTNAME,
            MIDDLENAME,
            LASTNAME,
            AGE,
            TIP_PERSON,
            USR_UPD,
          },
        }
      )
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

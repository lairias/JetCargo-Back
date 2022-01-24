import { Op } from "sequelize";
import { PA_STATES } from "../models/Pa_states";
import { HttpError } from "../helpers/handleError";
import sequelize from "../config/database/index";

export const GetStates = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll();
    return res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const GetStatesForCountry = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
   const cities = await sequelize.query("CALL SHOW_STATES_COUNTRY(:COD_COUNTRY)", {
     replacements: { COD_COUNTRY },
   });
    return res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const DeleteState = async (req, res, next) => {
    const { COD_STATE } = req.params;
    try {
      const cities = await PA_STATES.destroy({ where: { COD_STATE } });
      return res.status(200).json(cities);
    } catch (error) {
      HttpError(res, error);
      next();
    }
};
export const UpdateState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  const { NAM_STATE,DES_STATE ,USR_UPD ,COD_COUNTRY  }= req.body;
  try {
    const cities = await sequelize.query("CALL UPD_STATE(:COD_STATE, :NAM_STATE,:DES_STATE ,:USR_UPD ,:COD_COUNTRY ) ",
      {replacements: { COD_STATE, NAM_STATE, DES_STATE, USR_UPD, COD_COUNTRY }});
         return res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const CreateState = async (req, res, next) => {
  const {NAM_STATE,DES_STATE,USR_ADD,COD_COUNTRY} = req.body;
  console.log(req.body)
  try {
    const cities = await sequelize.query("CALL INS_STATE(:NAM_STATE,:DES_STATE,:USR_ADD,:COD_COUNTRY)",
      { replacements: { NAM_STATE, DES_STATE, USR_ADD, COD_COUNTRY } }
    );
    return res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};
export const GetState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  try {
    const cities = await PA_STATES.findOne({ where: { COD_STATE } });
    return res.status(200).json(cities);
  } catch (error) {
   HttpError(res, error);
    next();
  }
};

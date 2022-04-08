const { PA_STATES } =require( "../models/Pa_states")
const { HttpError } =require( "../helpers/handleError")
const sequelize =require( "../config/database/index")

 exports.GetStates = async (req, res, next) => {
  try {
    const cities = await PA_STATES.findAll({ where: { IND_STATE: 1 } });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetStatesForCountry = async (req, res, next) => {
  const { COD_COUNTRY } = req.params;
  try {
    const cities = await sequelize
      .query("CALL SHOW_STATES_COUNTRY(:COD_COUNTRY)", {
        replacements: { COD_COUNTRY },
      })
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.DeleteState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  try {
    await PA_STATES.destroy({ where: { COD_STATE } });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.UpdateState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  const { NAM_STATE, DES_STATE, USR_UPD, COD_COUNTRY } = req.body;
  try {
    await sequelize
      .query(
        "CALL UPD_STATE(:COD_STATE, :NAM_STATE,:DES_STATE ,:USR_UPD ,:COD_COUNTRY ) ",
        {
          replacements: {
            COD_STATE,
            NAM_STATE,
            DES_STATE,
            USR_UPD,
            COD_COUNTRY,
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
 exports.CreateState = async (req, res, next) => {
  const { NAM_STATE, DES_STATE, USR_ADD, COD_COUNTRY } = req.body;
  console.log(req.body);
  try {
    const cities = await sequelize
      .query("CALL INS_STATE(:NAM_STATE,:DES_STATE,:USR_ADD,:COD_COUNTRY)", {
        replacements: { NAM_STATE, DES_STATE, USR_ADD, COD_COUNTRY },
      })
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
 exports.GetState = async (req, res, next) => {
  const { COD_STATE } = req.params;
  try {
    const cities = await PA_STATES.findOne({ where: { COD_STATE } });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


const  PA_POEPLE  =require( "../models/Pa_people")
const sequelize =require( "../config/database")
const  {HttpError}  =require( "../helpers/handleError")

 exports.GetPeoples = async (req, res, next) => {
  try {
    const people = await PA_POEPLE.findAll();
    return res.status(200).json(people);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetPeople = async (req, res, next) => {
  const { COD_PEOPLE } = req.params;
  try {
    const people = await PA_POEPLE.findByPk(COD_PEOPLE);
    return res.status(200).json(people);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.DeletePeople = async (req, res, next) => {
  const { COD_PEOPLE } = req.params;
  try {
    await PA_POEPLE.destroy({ where: { COD_PEOPLE } });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.CreatePeople = async (req, res, next) => {
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
 exports.UpdatePeople = async (req, res, next) => {
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


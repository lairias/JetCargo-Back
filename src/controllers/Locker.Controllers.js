const  BO_LOCKER  =require("../models/BO_locker")
const sequelize =require("../config/database/index")
const  HttpError  =require("../helpers/handleError")
const  REL_CUSTOMER_LOKER  =require("../models/relations/REL_customer_locker")
const  {AsignacionLokerCustomers, transport } =require("../email")

 exports.GetLokers = async (req, res, next) => {
  try {
    const lockers = await BO_LOCKER.findAll();
    if (!lockers) return res.status(200).json({ ok: false, lockers });
    return res.status(200).json({ ok: true, lockers });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetLokersind = async (req, res, next) => {
  try {
    const lockersInd = await BO_LOCKER.findAll({ where: { IND_LOCKER: true } });
    if (!lockersInd) return res.status(200).json({ ok: false, lockersInd });
    return res.status(200).json({ ok: true, lockersInd });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetLoker = async (req, res, next) => {
  const { COD_LOCKER } = req.params;
  try {
    const cities = await BO_LOCKER.findByPk(COD_LOCKER);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetLokerByPeople = async (req, res, next) => {
  const { COD_LOCKER } = req.params;
  try {
    const cities = await BO_LOCKER.findByPk(COD_LOCKER);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetLokerByCustomer = async (req, res, next) => {
  const { COD_CUSTOMER } = req.params;
  try {
    const lokerCustomer = await sequelize.query(
      "CALL SHOW_LOCKER_CUSTOMER(:COD_CUSTOMER)",
      {
        replacements: { COD_CUSTOMER },
      }
    );
    if (!JSON.stringify(lokerCustomer[0]))
      return res.status(200).json({ ok: false, locker: false });
    return res.status(200).json({ ok: true, locker: lokerCustomer });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.CreateLoker = async (req, res, next) => {
  const { COD_PEOPLE, NUM_LOCKER, TYP_LOCKER, USR_ADD } = req.body;
  try {
    await sequelize
      .query("CALL INS_LOCKER(:COD_PEOPLE,:NUM_LOCKER,:TYP_LOCKER, :USR_ADD)", {
        replacements: {
          COD_PEOPLE,
          NUM_LOCKER,
          TYP_LOCKER,
          USR_ADD,
        },
      })
      .catch((error) => {
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};

 exports.CreateLokerCustomers = async (req, res, next) => {
  const { COD_CUSTOMER, COD_LOCKER, FRISTNAME, LASTNAME, EMAIL } = req.body;
  console.log(req.body);
  try {
    const locker = await REL_CUSTOMER_LOKER.create({
      COD_CUSTOMER,
      COD_LOCKER,
    });
    const lokerCustomer = await sequelize.query(
      "CALL SHOW_LOCKER_CUSTOMER(:COD_CUSTOMER)",
      {
        replacements: { COD_CUSTOMER },
      }
    );
    const numero_casillero = lokerCustomer[0].NUM_LOCKER;
    await transport.sendMail(
      AsignacionLokerCustomers(FRISTNAME, LASTNAME, numero_casillero, EMAIL)
    );
    return res.status(200).json({ ok: true, locker });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.DeleteLoker = async (req, res, next) => {
  const { COD_LOCKER } = req.params;
  try {
    await BO_LOCKER.destroy({
      where: {
        COD_LOCKER,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.UpdateLoker = async (req, res, next) => {
  const { COD_PEOPLE, NUM_LOCKER, TYP_LOCKER, IND_LOCKER, USR_UPD } = req.body;
  const { COD_LOCKER } = req.params;
  try {
    const cities = await sequelize
      .query(
        "CALL UPD_LOCKER(:COD_LOCKER,:COD_PEOPLE,:NUM_LOCKER,:TYP_LOCKER,:USR_UPD,:IND_LOCKER)",
        {
          replacements: {
            COD_LOCKER,
            COD_PEOPLE,
            NUM_LOCKER,
            TYP_LOCKER,
            USR_UPD,
            IND_LOCKER,
          },
        }
      )
      .catch((_) => {
        throw res.sendStatus(500);
      });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


const  BO_PACKAGE  =require("../models/BO_package")
const sequelize =require("../config/database/index")
const  {HttpError}  =require("../helpers/handleError")

 exports.GetPackages = async (req, res, next) => {
  try {
    const cities = await BO_PACKAGE.findAll();
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetPackageLokerByCustomer = async (req, res, next) => {
  const { COD_CUSTOMER, COD_LOCKER } = req.params;
  console.log(req.params);
  try {
    const packageLokerCustomer = await sequelize.query(
      "CALL SHOW_PACKAGE_CUSTOMER(:COD_CUSTOMER,:COD_LOCKER)",
      {
        replacements: { COD_CUSTOMER, COD_LOCKER },
      }
    );

    if (!JSON.stringify(packageLokerCustomer[0]))
      return res.status(200).json({ ok: false, packageLokerCustomer: false });
    return res.status(200).json({ ok: true, packageLokerCustomer });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetPackage = async (req, res, next) => {
  const { COD_PACKAGE } = req.params;
  try {
    const cities = await BO_PACKAGE.findByPk(COD_PACKAGE);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.CreatePackage = async (req, res, next) => {
  const {
    COD_CATPACKAGE,
    COD_TYPEPACKAGE,
    COD_LOCKER,
    NOM_PACKAGE,
    NUM_PACKAGE,
    HEIGHT_PACKAGE,
    WIDTH_PACKAGE,
    LENGTH_PACKAGE,
    WEIGHT_PACKAGE,
    PRICE_PACKAGE,
    VOL_PACKAGE,
    USR_ADD,
  } = req.body;
  try {
    await sequelize
      .query(
        "CALL INS_PACKAGE(:COD_CATPACKAGE,:COD_TYPEPACKAGE,:COD_LOCKER,:NOM_PACKAGE,:NUM_PACKAGE,:HEIGHT_PACKAGE,:WIDTH_PACKAGE,:LENGTH_PACKAGE,:WEIGHT_PACKAGE,:PRICE_PACKAGE,:VOL_PACKAGE,:USR_ADD)",
        {
          replacements: {
            COD_CATPACKAGE,
            COD_TYPEPACKAGE,
            COD_LOCKER,
            NOM_PACKAGE,
            NUM_PACKAGE,
            HEIGHT_PACKAGE,
            WIDTH_PACKAGE,
            LENGTH_PACKAGE,
            WEIGHT_PACKAGE,
            PRICE_PACKAGE,
            VOL_PACKAGE,
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
 exports.DeletePackage = async (req, res, next) => {
  const { COD_PACKAGE } = req.params;
  try {
    await BO_PACKAGE.destroy({
      where: {
        COD_PACKAGE,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.UpdatePackage = async (req, res, next) => {
  const {
    COD_CATPACKAGE,
    COD_TYPEPACKAGE,
    COD_LOCKER,
    NOM_PACKAGE,
    NUM_PACKAGE,
    HEIGHT_PACKAGE,
    WIDTH_PACKAGE,
    LENGTH_PACKAGE,
    WEIGHT_PACKAGE,
    PRICE_PACKAGE,
    VOL_PACKAGE,
    IND_PACKAGE,
    USR_UPD,
  } = req.body;
  const { COD_PACKAGE } = req.params;
  try {
    await sequelize
      .query(
        "CALL UPD_PACKAGE(:COD_PACKAGE,:COD_CATPACKAGE,:COD_TYPEPACKAGE,:COD_LOCKER,:NOM_PACKAGE,:NUM_PACKAGE,:HEIGHT_PACKAGE,:WIDTH_PACKAGE,:LENGTH_PACKAGE,:WEIGHT_PACKAGE,:PRICE_PACKAGE,:VOL_PACKAGE,:IND_PACKAGE,:USR_UPD)",
        {
          replacements: {
            COD_PACKAGE,
            COD_CATPACKAGE,
            COD_TYPEPACKAGE,
            COD_LOCKER,
            NOM_PACKAGE,
            NUM_PACKAGE,
            HEIGHT_PACKAGE,
            WIDTH_PACKAGE,
            LENGTH_PACKAGE,
            WEIGHT_PACKAGE,
            PRICE_PACKAGE,
            VOL_PACKAGE,
            IND_PACKAGE,
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


const { BO_TYPEPACKAGE } =require( "../models/BO_typePackage")
const sequelize =require( "../config/database/index")
const { HttpError } =require( "../helpers/handleError")
 exports.GetTypePackages = async (req, res, next) => {
  try {
    const typePackage = await BO_TYPEPACKAGE.findAll();
    return res.status(200).json({ ok: true, typePackage });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetTypePackage = async (req, res, next) => {
  const { COD_TYPEPACKAGE } = req.params;
  try {
    const cities = await BO_TYPEPACKAGE.findByPk(COD_TYPEPACKAGE);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.CreateTypePackage = async (req, res, next) => {
  const { NAM_TYPEPACKAGE, DES_TYPEPACKAGE, USR_ADD } = req.body;
  try {
    const cities = await sequelize
      .query(
        "CALL INS_TYPEPACKAGE(:NAM_TYPEPACKAGE,:DES_TYPEPACKAGE,:USR_ADD)",
        {
          replacements: {
            NAM_TYPEPACKAGE,
            DES_TYPEPACKAGE,
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
 exports.DeleteTypePackage = async (req, res, next) => {
  const { COD_TYPEPACKAGE } = req.params;
  try {
    await BO_TYPEPACKAGE.destroy({
      where: {
        COD_TYPEPACKAGE,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.UpdateTypePackage = async (req, res, next) => {
  const { NAM_TYPEPACKAGE, DES_TYPEPACKAGE, USR_UPD } = req.body;
  const { COD_TYPEPACKAGE } = req.params;
  try {
    await sequelize
      .query(
        "CALL UPD_TYPEPACKAGE(:COD_TYPEPACKAGE,:NAM_TYPEPACKAGE,:DES_TYPEPACKAGE,:USR_UPD)",
        {
          replacements: {
            COD_TYPEPACKAGE,
            NAM_TYPEPACKAGE,
            DES_TYPEPACKAGE,
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


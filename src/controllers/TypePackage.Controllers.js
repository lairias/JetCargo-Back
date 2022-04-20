const  BO_TYPEPACKAGE  =require( "../models/BO_typePackage")
const sequelize =require( "../config/database/index")
const  {HttpError}  =require( "../helpers/handleError")
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
  console.log(COD_TYPEPACKAGE);
  try {
    const cities = await BO_TYPEPACKAGE.findByPk(COD_TYPEPACKAGE);
    console.log(cities);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetTypePackageShipping = async (req, res, next) => {
  const { COD_TYPEPACKAGE } = req.params;
  try {
    const cities = await sequelize.query("CALL SHOW_TYPEPACKAGE_SHOPPING(:COD_TYPEPACKAGE)",{
      replacements:{
        COD_TYPEPACKAGE
      }
    });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CreateTypePackage = async (req, res, next) => {
  const { COD_SHIPPINGCOST,NAM_TYPEPACKAGE, DES_TYPEPACKAGE,ABBRE_TYPEPACKAGE,PREC_TYPEPACKAGE } = req.body;
  try {
  await  BO_TYPEPACKAGE.create({
      COD_SHIPPINGCOST,NAM_TYPEPACKAGE,ABBRE_TYPEPACKAGE,DES_TYPEPACKAGE,PREC_TYPEPACKAGE, USR_ADD: "admin",
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


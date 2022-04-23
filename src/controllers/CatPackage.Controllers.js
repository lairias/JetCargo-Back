const sequelize =require("../config/database/index")
const  BO_CATPACKAGE  =require("../models/BO_catPackage")

const  {HttpError}  =require("../helpers/handleError")
exports.GetCatPackages = async (req, res, next) => {
  try {
    const catPackage = await BO_CATPACKAGE.findAll();
    return res.status(200).json({ ok: true, catPackage });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetCatPackagesind = async (req, res, next) => {
  try {
    const catPackage = await BO_CATPACKAGE.findAll({where:{IND_CATPACKAGE:1}});
    return res.status(200).json({ ok: true, catPackage });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.GetCatPackage = async (req, res, next) => {
  const { COD_CATPACKAGE } = req.params;
  try {
    const cities = await BO_CATPACKAGE.findByPk(COD_CATPACKAGE);
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.CreateCatPackage = async (req, res, next) => {
  const { NAM_CATPACKAGE, DES_CATPACKAGE, USR_ADD } = req.body;
  try {
    const cities = await sequelize
      .query("CALL INS_CATPACKAGES(:NAM_CATPACKAGE,:DES_CATPACKAGE,:USR_ADD)", {
        replacements: {
          NAM_CATPACKAGE,
          DES_CATPACKAGE,
          USR_ADD,
        },
      })
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.status.json({ ok: true });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.UpdateCatPackage = async (req, res, next) => {
  const {  DES_CATPACKAGE,IND_CATPACKAGE } = req.body;
  const { COD_CATPACKAGE } = req.params;
  try {
    
     await BO_CATPACKAGE.update({
      NAM_CATPACKAGE: DES_CATPACKAGE,
      DES_CATPACKAGE,
      IND_CATPACKAGE
     },{where:{COD_CATPACKAGE

     }})
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.DeleteCatPackage = async (req, res, next) => {
  const { COD_CATPACKAGE } = req.params;

  try {
    const cities = await BO_CATPACKAGE.destroy({
      where: {
        COD_CATPACKAGE,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


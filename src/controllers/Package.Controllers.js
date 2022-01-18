import { BO_PACKAGE } from "../models/BO_package";
import sequelize from "../config/database/index";

export const GetPackages = async (req, res, next) => {
  try {
    const cities = await BO_PACKAGE.findAll();
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

export const GetPackage = async (req, res, next) => {
  const { COD_PACKAGE } = req.params;
  try {
    const cities = await BO_PACKAGE.findByPk(COD_PACKAGE);
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

export const CreatePackage = async (req, res, next) => {
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
    const cities = await sequelize.query(
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
    );
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const DeletePackage = async (req, res, next) => {
  const { COD_PACKAGE } = req.params;
  try {
    const cities = await BO_PACKAGE.destroy({
      where: {
        COD_PACKAGE,
      },
    });
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const UpdatePackage = async (req, res, next) => {
  const { COD_PEOPLE, NUM_LOCKER, TYP_LOCKER, IND_LOCKER, USR_UPD } = req.body;
  const { COD_PACKAGE } = req.params;
  try {
    const cities = await sequelize.query(
      "CALL UPD_LOCKER(:COD_PACKAGE,:COD_PEOPLE,:NUM_LOCKER,:TYP_LOCKER,:USR_UPD,:IND_LOCKER)",
      {
        replacements: {
          COD_PACKAGE,
          COD_PEOPLE,
          NUM_LOCKER,
          TYP_LOCKER,
          USR_UPD,
          IND_LOCKER,
        },
      }
    );
    res.status(200).json(cities);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

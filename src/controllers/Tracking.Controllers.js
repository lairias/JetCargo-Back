import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { HttpError } from "../helpers/handleError";
import sequelize from "../config/database";
import RandomCode from "random-codes";
import {BO_TRACKING} from "../models/Bo_tracking";
import {BO_PACKAGE} from "../models/BO_package";
import {BO_TYPEPACKAGE} from "../models/BO_typePackage";

export const GetTracking = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetTrackings = async (req, res, next) => {
  try {
    await PA_TypeUsers.findAll();
    return res.status(200).json();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const GetTrackingsNumberService = async (req, res, next) => {
  const { COD_SERVICE, NUM_TRACKING } = req.params;
  try {
    const resultado = await sequelize.query(
      "CALL SHOW_TRACKING_SERVICE_ID(:COD_SERVICE,:NUM_TRACKING)",
      {
        replacements: {
          COD_SERVICE,
          NUM_TRACKING,
        },
      }
    );
    if (!JSON.stringify(resultado[0]))
      return res.status(200).json({ ok: false, TrackingNumber: false });
    return res.status(200).json({ ok: true, TrackingNumber: resultado });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const GetTracking_not_orden = async (req, res, next) => {
  const { COD_TRACKING,COD_PACKAGE,NUM_LOCKER, COD_CUSTOMER } = req.params;
  try {
    const cities = await sequelize.query("CALL SHOW_TRACKING_PACKAGE_NOT_ORDEN_ID(:COD_TRACKING,:COD_PACKAGE,:NUM_LOCKER,:COD_CUSTOMER)", {
      replacements: { COD_TRACKING,COD_PACKAGE,NUM_LOCKER,COD_CUSTOMER},
      });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

export const UpdateTracking = async (req, res, next) => {
  const {
  WEIGHT_PACKAGE,
  HEIGHT_PACKAGE,
  WIDTH_PACKAGE,
  COD_TYPEPACKAGE,
  VOL_PACKAGE,
  NOM_PACKAGE,
  COD_CATPACKAGE,
  COD_SERVICE,
  RECEIVED_TRACKING,
  NUM_TRACKING,
  DES_TRACKING,
  COD_PACKAGE,
  checbox,
  } = req.body;
  const {COD_TRACKING} = req.params;
  try {
    console.log(req.body)
    const CatPackage = await BO_TYPEPACKAGE.findByPk(COD_TYPEPACKAGE);
    const Tracking = await BO_TRACKING.update({
      COD_SERVICE,
      DES_TRACKING,
      NUM_TRACKING,
      RECEIVED_TRACKING,
      IND_TRACKING: checbox,
    },
    {
      where: {
        COD_TRACKING
      } });
      const PRICE_PACKAGE = parseFloat(CatPackage.PREC_TYPEPACKAGE) * parseFloat(WEIGHT_PACKAGE);
    const Package = await BO_PACKAGE.update({
      COD_CATPACKAGE,
      COD_TYPEPACKAGE,
      NOM_PACKAGE,
      HEIGHT_PACKAGE ,
      WIDTH_PACKAGE,
      WEIGHT_PACKAGE,
      PRICE_PACKAGE,
      VOL_PACKAGE,
      IND_PACKAGE: checbox,
    },{
      where: {
        COD_PACKAGE
      }})
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};
export const DeleteTracking = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CreateTracking = async (req, res, next) => {
  const {
    COD_SERVICE,
    COD_CATPACKAGE,
    COD_TYPEPACKAGE,
    NOM_PACKAGE,
    DES_TRACKING,
    NUM_TRACKING,
    COD_LOCKER,
    COD_CUSTOMER,
  } = req.body;
  console.log(req.body);
  try {
    const rc = new RandomCode(config);
    const NUM_PACKAGE = rc.generate();

    const tracking = sequelize.query(
      "CALL INS_TRACKIN_ORDEN(:COD_CATPACKAGE,:COD_SERVICE,:COD_TYPEPACKAGE,:NOM_PACKAGE,:NUM_PACKAGE,:DES_TRACKING,:NUM_TRACKING,:COD_LOCKER,:COD_CUSTOMER)",
      {
        replacements: {
          COD_CATPACKAGE,
          COD_SERVICE,
          COD_TYPEPACKAGE,
          NOM_PACKAGE,
          NUM_PACKAGE,
          DES_TRACKING,
          NUM_TRACKING,
          COD_LOCKER,
          COD_CUSTOMER,
        },
      }
    );
    return res.status(200).json({ ok: true, TrackingNumber: tracking });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

var config = {
  // A string containing available chars
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",

  // Separator char used to divide code parts
  separator: "-",

  // Char used to mask code
  mask: "*",

  // Number of parts the code contains
  parts: 2,

  // Size of each part
  part_size: 4,

  // Function used to get a random char from the chars pool
  // (Please use a better one)
  getChar: function (pool) {
    var random = Math.floor(Math.random() * pool.length);
    return pool.charAt(random);
  },
};

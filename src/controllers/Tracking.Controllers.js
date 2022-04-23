const  PA_TypeUsers  =require( "../models/Pa_typeUsers")
const  {HttpError}  =require( "../helpers/handleError")
const sequelize =require( "../config/database")
const  BO_PACKAGE  =require( "../models/BO_package")
const { transport, ResivedTracking,RegistroPackageAdmin } =require("../email")
const PA_CUSTOMES = require("../models/Pa_customes")
const USERS = require("../models/Users")
const PA_POEPLE = require("../models/Pa_people")
const  BO_TRACKING  =require( "../models/Bo_tracking")
const generator = require('generate-password');
 exports.TrackingNotOrdenType = async (req, res, next) => {
  const { COD_TYPEPACKAGE, RECEIVED_TRACKING } = req.params;
  try {
    const count = await sequelize.query("CALL COUNT_TRACKING_NOT_ORDEN()");
    const tracking = await sequelize.query(
      "CALL SHOW_TRACKING_NOT_ORDEN_TYPEPACKAGE(:COD_TYPEPACKAGE,:RECEIVED_TRACKING)",
      {
        replacements: {
          COD_TYPEPACKAGE,
          RECEIVED_TRACKING,
        }
      }
    );
    if (!JSON.stringify(tracking[0]))
      return res.status(203).json({ ok: false, tracking: false, count: 0 });
    return res.status(203).json({ ok: true, tracking, count });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.TrackingNotOrdenCustomer = async (req, res, next) => {
  const { RECEIVED_TRACKING, COD_CUSTOMER, NUM_TRACKING } = req.params;
  try {
    const tracking = await sequelize.query(
      "CALL SHOW_TRACKING_NOT_ORDEN_CUSTOMER(:RECEIVED_TRACKING,:COD_CUSTOMER,:NUM_TRACKING)",
      {
        replacements: {
          RECEIVED_TRACKING,
          COD_CUSTOMER,
          NUM_TRACKING,
        },
      }
    );
    if (!JSON.stringify(tracking[0]))
      return res.status(203).json({ ok: false, tracking: false });
    return res.status(203).json({ ok: true, tracking });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.TrackingNotOrden = async (req, res, next) => {
  const { RECEIVED_TRACKING } = req.params;
  try {
    const count = await sequelize.query("CALL COUNT_TRACKING_NOT_ORDEN()");
    const tracking = await sequelize.query(
      "CALL SHOW_TRACKING_NOT_ORDEN(:RECEIVED_TRACKING)",
      {
        replacements: {
          RECEIVED_TRACKING,
        },
      }
    );
    if (!JSON.stringify(tracking[0]))
      return res.status(203).json({ ok: false, tracking: false, count: 0 });
    return res.status(203).json({ ok: true, tracking, count });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetTracking = async (req, res, next) => {
  try {
    const {COD_TRACKING} = req.params;
    const tracking = await BO_TRACKING.findOne({
      where: {
        COD_TRACKING,
      },
    });
    if (!tracking)
      return res.status(203).json({ ok: false, tracking: false });
    return res.status(203).json({ ok: true, tracking });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


 
 exports.GetTrackingsNumber = async (req, res, next) => {
  const { NUM_TRACKING } = req.params;
  try {
    const tracking = await BO_TRACKING.findOne({
      where: { NUM_TRACKING },
    });
    return res.status(200).json({ ok: true, Number_tracking: tracking });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetTrackingsNumberService = async (req, res, next) => {
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

 exports.GetTracking_not_orden = async (req, res, next) => {
  const { COD_TRACKING, COD_PACKAGE, NUM_LOCKER, COD_CUSTOMER } = req.params;
  try {
    const cities = await sequelize.query(
      "CALL SHOW_TRACKING_PACKAGE_NOT_ORDEN_ID(:COD_TRACKING,:COD_PACKAGE,:NUM_LOCKER,:COD_CUSTOMER)",
      {
        replacements: { COD_TRACKING, COD_PACKAGE, NUM_LOCKER, COD_CUSTOMER },
      }
    );
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.GetTrackingId = async (req, res, next) => {
  const { COD_TRACKING } = req.params;

  try {
    const tracking =  await BO_TRACKING.findByPk(COD_TRACKING);
   return res.status(200).json({ tracking });
    
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};
 exports.UpdateTracking = async (req, res, next) => {
  const {
    HEIGHT_PACKAGE,
    WIDTH_PACKAGE,
    WEIGHT_PACKAGE,
    COD_TYPEPACKAGE,
    VOL_PACKAGE,
    NOM_PACKAGE,
    COD_CATPACKAGE,
    COD_SERVICE,
    RECEIVED_TRACKING,
    NUM_TRACKING,
    DES_TRACKING,
    ALTURA_PACKAGE,
  ANCHO_PACKAGE,
  LARGO_PACKAGE,
    COD_CUSTOMER,
    COD_PACKAGE,
    caculuVolumetrico,
    calculoDolares,
    IND_TRACKING,
    checbox,
  } = req.body;
  const { COD_TRACKING } = req.params;

  try {
    if(caculuVolumetrico > calculoDolares){
     await BO_TRACKING.update(
      {
        COD_SERVICE,
        DES_TRACKING,
        NUM_TRACKING,
        RECEIVED_TRACKING,
        IND_TRACKING: parseInt(IND_TRACKING),
      },
      {
        where: {
          COD_TRACKING,
        },
      }
    );
   
    await BO_PACKAGE.update(
      {
        COD_CATPACKAGE,
        COD_TYPEPACKAGE,
        NOM_PACKAGE,
        HEIGHT_PACKAGE,
        WIDTH_PACKAGE,
        WEIGHT_PACKAGE,
        PRICE_PACKAGE : parseInt(caculuVolumetrico),
        VOL_PACKAGE,
        ALTURA_PACKAGE,
        LARGO_PACKAGE,
        ANCHO_PACKAGE,
        IND_PACKAGE:parseInt(IND_TRACKING)
      },
      {
        where: {
          COD_PACKAGE,
        },
      }
    );
    }else{
      await BO_TRACKING.update(
        {
          COD_SERVICE,
          DES_TRACKING,
          NUM_TRACKING,
          RECEIVED_TRACKING,
          IND_TRACKING: parseInt(IND_TRACKING),
        },
        {
          where: {
            COD_TRACKING,
          },
        }
      );
     
      await BO_PACKAGE.update(
        {
          COD_CATPACKAGE,
          COD_TYPEPACKAGE,
          NOM_PACKAGE,
          HEIGHT_PACKAGE,
          WIDTH_PACKAGE,
          WEIGHT_PACKAGE,
          PRICE_PACKAGE : parseInt(calculoDolares),
          VOL_PACKAGE,
          ALTURA_PACKAGE,
          LARGO_PACKAGE,
          ANCHO_PACKAGE,
          IND_PACKAGE:parseInt(IND_TRACKING)
        },
        {
          where: {
            COD_PACKAGE,
          },
        }
      );
    }
    
    const customer = await PA_CUSTOMES.findOne({where: { COD_CUSTOMER }})
    const User = await USERS.findOne({where: {COD_USER:customer.COD_USER}})
    const People = await PA_POEPLE.findOne({where: {COD_PEOPLE:User.COD_PEOPLE}})

    await transport.sendMail(
      ResivedTracking(
      People.FRISTNAME,
      People.LASTNAME,
        User.EMAIL.replace("@", "%40"),
        req.headers.host,
        NUM_TRACKING
      )
    );
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};



 exports.DeleteTracking = async (req, res, next) => {
  try {
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.CreateTracking = async (req, res, next) => {
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
  try {
    const NUM_PACKAGE = generator.generate({
      length: 10,
      numbers: true
    });
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
    const customer = await PA_CUSTOMES.findOne({where: { COD_CUSTOMER }})
    const User = await USERS.findOne({where: {COD_USER:customer.COD_USER}})
    const People = await PA_POEPLE.findOne({where: {COD_PEOPLE:User.COD_PEOPLE}})

    await transport.sendMail(
      ResivedTracking(
      People.FRISTNAME,
      People.LASTNAME,
        User.EMAIL.replace("@", "%40"),
        req.headers.host,
        NUM_TRACKING
      )
    );
    
    return res.status(200).json({ ok: true, TrackingNumber: tracking });
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};


var config = {
  // A string containing available chars
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  
  // Separator char used to divide code parts
  separator: '-',
  
  // Char used to mask code
  mask: '*',
  
  // Number of parts the code contains
  parts: 3,
  
  // Size of each part
  part_size: 4,
  
  // Function used to get a random char from the chars pool 
  // (Please use a better one) 
  getChar: function (pool) {
      var random = Math.floor(Math.random() * pool.length);
      return pool.charAt(random);
  }
};

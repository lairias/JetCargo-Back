const  PA_TypeUsers  =require( "../models/Pa_typeUsers")
const  HttpError  =require( "../helpers/handleError")
const sequelize =require( "../config/database")
const RandomCode =require( "random-codes")
const  BO_TRACKING  =require( "../models/Bo_tracking")
const  BO_PACKAGE  =require( "../models/BO_package")
const  BO_TYPEPACKAGE  =require( "../models/BO_typePackage")

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
 exports.GetTrackings = async (req, res, next) => {
  try {
    await PA_TypeUsers.findAll();
    return res.status(200).json();
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
  console.log("funciona");
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
    COD_CUSTOMER,
    COD_PACKAGE,
    checbox,
  } = req.body;
  const { COD_TRACKING } = req.params;

  try {
    const CatPackage = await BO_TYPEPACKAGE.findByPk(COD_TYPEPACKAGE);
    const tracking = await BO_TRACKING.update(
      {
        COD_SERVICE,
        DES_TRACKING,
        NUM_TRACKING,
        RECEIVED_TRACKING,
        IND_TRACKING: checbox,
      },
      {
        where: {
          COD_TRACKING,
        },
      }
    );
    const PRICE_PACKAGE =
      parseFloat(CatPackage.PREC_TYPEPACKAGE) * parseFloat(WEIGHT_PACKAGE);
    await BO_PACKAGE.update(
      {
        COD_CATPACKAGE,
        COD_TYPEPACKAGE,
        NOM_PACKAGE,
        HEIGHT_PACKAGE,
        WIDTH_PACKAGE,
        WEIGHT_PACKAGE,
        PRICE_PACKAGE,
        VOL_PACKAGE,
        IND_PACKAGE: checbox,
      },
      {
        where: {
          COD_PACKAGE,
        },
      }
    );

    // const User = await USERS.findByPk(COD_USER);
    // const people = await PA_POEPLE.findByPk(User.COD_PEOPLE);
    // const RelPhone = await REL_PEOPLE_PHONE.findOne({ where: { COD_PEOPLE:User.COD_PEOPLE }});
    // const phone = await PA_PHONES.findByPk(RelPhone.COD_PHONE);
    // const servicio = await DE_SERVICE.findByPk(COD_SERVICE)
    // const message = `Hola ${people.FRISTNAME} ${people.LASTNAME}, le saluda Jetcargo para informarle que su paquete ${NUM_TRACKING} por el servicio de ${servicio.SERVICE_NAME}, estaremos en espera a que usted realice el pago.`;
    // await SendMessage(message,`+${phone.NUM_AREA}${phone.NUM_PHONE}`);
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

  // Function used to get a random char =require( the chars pool
  // (Please use a better one)
  getChar: function (pool) {
    var random = Math.floor(Math.random() * pool.length);
    return pool.charAt(random);
  },
};


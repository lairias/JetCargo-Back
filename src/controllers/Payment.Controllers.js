const   BO_TYPEPACKAGE  =require( "../models/BO_typePackage")
const   HttpError  =require( "../helpers/handleError")
const { v4: uuidv4 } = require('uuid');
const  axios =require( "axios")
require('dotenv').config()
const   DE_ORDEN  =require( "../models/DE_orden")
const   BO_PACKAGE  =require( "../models/BO_package")
const   BO_TRACKING  =require( "../models/BO_tracking")
 exports.CreateOrden = async (req, res, next) => {
  const { mensaje, DataTrackinNotOrden } = req.body;
  try {
    const orden = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: { 
            currency_code: "USD",
            value: parseFloat(DataTrackinNotOrden[0].PRICE_PACKAGE),
          },
          description: mensaje,
        },
      ],
      application_context: {
        brand_name: "Jetcargo.vip",
        landing_page: "NO_REFERENCE",
        user_action: "PAY_NOW",
        return_url: `${process.env.API_BACK}:${process.env.PORT}/api/payment/capture-orden/${DataTrackinNotOrden[0].COD_CUSTOMER}/${DataTrackinNotOrden[0].COD_TRACKING}/${DataTrackinNotOrden[0].COD_PACKAGE}`,
        cancel_url: "http://localhost:3000/payment/cancel",
      },
    };
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: process.env.PAPAL_API_CLIENTE,
          password: process.env.PAPAL_API_SECRET,
        },
      }
    );
    const { data } = await axios.post(
      `${process.env.PAPAL_API}/v2/checkout/orders`,
      orden,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    HttpError(res, error);
    next();
  }
};

 exports.CaptureOrden = async (req, res, next) => {
  try {
    const { COD_CUSTOMER, COD_TRACKING, COD_PACKAGE } = req.params;
    const { token, PayerID } = req.query;

    if (!COD_CUSTOMER)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT}`);
    if (!COD_TRACKING)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT}`);
    if (!COD_PACKAGE)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT}`);
    if (!token)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT}`);
    if (!PayerID)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT}`);

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: process.env.PAPAL_API_CLIENTE,
          password: process.env.PAPAL_API_SECRET,
        },
      }
    );
    const respuesta = await axios.post(
      `${process.env.PAPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    await DE_ORDEN.create({
      COD_TRACKING,
      NUM_ORDEN: uuidv4(),
      CHECKPOINT_STATUS: "IN_PROGRESS",
    });
    const tracking = await BO_TRACKING.findOne({
      where: { COD_TRACKING },
    });
    await BO_TRACKING.update(
      {
        RECEIVED_TRACKING: "IN_PROGRESS",
      },
      { where: { COD_TRACKING } }
    );
    const boPackage = await BO_PACKAGE.update(
      {
        PAYMENT_CANCELLED: true,
      },
      { where: { COD_PACKAGE } }
    );

    return res.redirect(
      `${process.env.API_FROND}:${process.env.PORT_FROND}/admin/locker/${tracking.NUM_TRACKING}`
    );
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.CancelCreateOrden = async (req, res, next) => {
  try {
    const typePackage = await BO_TYPEPACKAGE.findAll();
    return res.status(200).json({ ok: true, typePackage });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


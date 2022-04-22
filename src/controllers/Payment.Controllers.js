const   BO_TYPEPACKAGE  =require( "../models/BO_typePackage")
const   {HttpError}  =require( "../helpers/handleError")
const { v4: uuidv4 } = require('uuid');
const  axios =require( "axios")
const request = require("request");
require('dotenv').config();
const   DE_ORDEN  =require( "../models/DE_orden")
const   BO_PACKAGE  =require( "../models/BO_package")
const   BO_TRACKING  =require( "../models/BO_tracking")

const CLIENT = 'AZzqHj_nNV-CtWQajvSBeD0DI5we8BE8EX_QKVS5wg1a2u2dtucHSIx4e7xywpT9tyDvt8oKREpfAWik';
const SECRET = 'EEVbO57bu95GQV4gKIoDzXaQK0MteeX68RPfqTMSsoUDWKhm3plnXiiyiU84dkYDUyUOp7XixYXYKYCD';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com

const auth = { user: CLIENT, pass: SECRET }
 exports.CreateOrden = async (req, res, next) => {
  const { mensaje, DataTrackinNotOrden } = req.body;
  try {
    const body = {
      intent: 'CAPTURE',
      purchase_units: [{
          amount: {
              currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
              value: DataTrackinNotOrden[0].PRICE_PACKAGE
          },
          description: mensaje
      }],
      application_context: {
          brand_name: `JetCargo.com`,
          landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
          user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
          return_url: `${process.env.API_BACK}:${process.env.PORT_BACK}/api/payment/capture-orden/${DataTrackinNotOrden[0].COD_CUSTOMER}/${DataTrackinNotOrden[0].COD_TRACKING}/${DataTrackinNotOrden[0].COD_PACKAGE}`, // Url despues de realizar el pago
          cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
      }
  }
  request.post(`${PAYPAL_API}/v2/checkout/orders`, {
    auth,
    body,
    json: true
}, (err, response) => {
    res.json({ data: response.body })
})

  } catch (error) {
  
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




      request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
          auth,
          body: {},
          json: true
      }, (err, response) => {
        console.log(response.body)
      })



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
     await BO_PACKAGE.update(
      {
        PAYMENT_CANCELLED: true,
      },
      { where: { COD_PACKAGE } }
    );

    return res.redirect(
      `${process.env.API_FROND}:${process.env.PORT_FROND}/admin/locker/${tracking.NUM_TRACKING}`
    );
  } catch (error) {
    console.log(error);
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


import { BO_TYPEPACKAGE } from "../models/BO_typePackage";
import { HttpError } from "../helpers/handleError";
import { v4 as uuidv4 } from 'uuid';
import {
  PAPAL_API,
  PAPAL_API_CLIENTE,
  PAPAL_API_SECRET,
} from "../config/database/Paypal/config";
import axios from "axios";
import "dotenv/config";
import { DE_ORDEN } from "../models/DE_orden";
import { BO_PACKAGE } from "../models/BO_package";
import { BO_TRACKING } from "../models/BO_tracking";
export const CreateOrden = async (req, res, next) => {
  const {mensaje, DataTrackinNotOrden } = req.body;
  console.log(mensaje,DataTrackinNotOrden);
  try {
    const orden = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            value: parseFloat(DataTrackinNotOrden[0].PRICE_PACKAGE),
            currency_code: "USD",
          },
          description: mensaje,
        },
      ],
      application_context: {
        brand_name: "Jetcargo.vip",
        landing_page: "LOGIN",
        shipping_preference: "GET_FROM_FILE",
        user_action: "PAY_NOW",
        return_url: `${process.env.API_BACK}:${process.env.PORT_API}/api/payment/capture-orden/${DataTrackinNotOrden[0].COD_CUSTOMER}/${DataTrackinNotOrden[0].COD_TRACKING}/${DataTrackinNotOrden[0].COD_PACKAGE}`,
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
          username: PAPAL_API_CLIENTE,
          password: PAPAL_API_SECRET,
        },
      }
    );
    const { data } = await axios.post(
      `${PAPAL_API}/v2/checkout/orders`,
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
export const CaptureOrden = async (req, res, next) => {
  try {
    const { COD_CUSTOMER, COD_TRACKING, COD_PACKAGE } = req.params;
    const { token, PayerID } = req.query;

    if (!COD_CUSTOMER)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT_API}`);
    if (!COD_TRACKING)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT_API}`);
    if (!COD_PACKAGE)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT_API}`);
    if (!token)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT_API}`);
    if (!PayerID)
      return res.redirect(`${process.env.API_BACK}:${process.env.PORT_API}`);

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
          username: PAPAL_API_CLIENTE,
          password: PAPAL_API_SECRET,
        },
      }
    );
    const respuesta = await axios.post(
      `${PAPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    await DE_ORDEN.create({
      COD_TRACKING,
      NUM_ORDEN : uuidv4(),
      CHECKPOINT_STATUS: "IN_PROGRESS",
    });
    const tracking = await BO_TRACKING.update({
      RECEIVED_TRACKING: "IN_PROGRESS",
    },{where:{COD_TRACKING}});
 const boPackage = await  BO_PACKAGE.update({
      PAYMENT_CANCELLED : true
    },
    {where:{COD_PACKAGE}})

     return res.redirect(`http://${process.env.API_FROND}:${process.env.PORT_FROND}/admin/locker/${tracking.NUM_TRACKING}`);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CancelCreateOrden = async (req, res, next) => {
  try {
    const typePackage = await BO_TYPEPACKAGE.findAll();
    return res.status(200).json({ ok: true, typePackage });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

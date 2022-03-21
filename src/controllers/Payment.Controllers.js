import { BO_TYPEPACKAGE } from "../models/BO_typePackage";
import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";
import {PAPAL_API,PAPAL_API_CLIENTE,PAPAL_API_SECRET} from "../config/database/Paypal/config"
import axios from "axios";
export const CreateOrden = async (req, res, next) => {
  try {
      const orden = {
          intent : "CAPTURE",
            purchase_units: [
                { amount: { value: "1.00", currency_code: "USD" },
                description: "This is the payment description." }
            ],
            application_context: {
                brand_name: "Jetcargo.vip",
                landing_page: "LOGIN",
                shipping_preference: "NO_SHIPPING",
                user_action: "PAY_NOW",
                return_url: "https://localhost:3000/payment/success",
                cancel_url: "https://localhost:3000/payment/cancel"
            }
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
      const {data} = await  axios.post(`${PAPAL_API}/v2/checkout/orders`, orden, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        res.send(data)
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CaptureOrden = async (req, res, next) => {
  try {
    const typePackage = await BO_TYPEPACKAGE.findAll();
    return res.status(200).json({ok: true, typePackage});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
export const CancelCreateOrden = async (req, res, next) => {
  try {
    const typePackage = await BO_TYPEPACKAGE.findAll();
    return res.status(200).json({ok: true, typePackage});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
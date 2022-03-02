import sequelize from "../config/database/index";
import { HttpError } from "../helpers/handleError";

export const GetCustomers = async (req, res, next) => {
  try {
    const customers = await sequelize.query("CALL SHOW_CUSTOMERS()");
    return res.status(200).json({ok:true, customers});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
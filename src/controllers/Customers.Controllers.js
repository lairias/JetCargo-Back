const sequelize =require( "../config/database/index")
const  {HttpError}  =require( "../helpers/handleError")

exports.GetCustomers = async (req, res, next) => {
  try {
    const customers = await sequelize.query("CALL SHOW_CUSTOMERS()");
    return res.status(200).json({ ok: true, customers });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

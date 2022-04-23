const  LOG_ERROR  = require( "../models/LOG_Errores")
const  {HttpError}  = require( "../helpers/handleError")

exports.GetErrores = async (req, res, next) => {
  try {
    const Error = await LOG_ERROR.findAll();

    return res.status(200).json(Error);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


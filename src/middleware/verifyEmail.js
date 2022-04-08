const { HttpError } =require( "../helpers/handleError")
const { USERS } =require( "../models/Users")

 const CheckDuplicateEmail = async (req, res, next) => {
  const { EMAIL } = req.body;
  try {
    if (await USERS.findOne({ where: { EMAIL } }))
      return res
        .status(203)
        .json({ message: "Correo electrónico no disponible" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

module.exports = {
  CheckDuplicateEmail,
};
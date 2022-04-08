const jwt = require("jsonwebtoken");
const { USERS } =require( "../models/Users")
require('dotenv').config()
const { HttpError } =require( "../helpers/handleError")
const { verifyTokenDate } =require( "./tokens/verifyToken.Date")
 const verifyTokenPass = async (req, res, next) => {
  const { TOKEN } = req.params;
  try {
    if (!verifyTokenDate(TOKEN))
      return res.status(202).json({
        message:
          "Tiempo de recuperación de contraseña caducado. Intenta de nuevo",
      });
    const { id } = jwt.verify(TOKEN, process.env.JWTSECRETPASSWORD);
    const lock = await USERS.findByPk(id);
    req.userIdR = id;
    if (!lock) return res.status(202).json({ message: "no user found" });
    if (!lock.IND_USR)
      return res.status(202).json({ message: "no user no activo" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

module.exports = {
  verifyTokenPass,
};
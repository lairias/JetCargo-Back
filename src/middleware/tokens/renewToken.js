const jwt = require("jsonwebtoken");
const {JWTSECRET} =require("../../config")
const { HttpError } =require( "../../helpers/handleError")
 const renewToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token)
      return res.status(203).json({ ok: false, message: "No token provided" });
    const { id } = jwt.verify(token,JWTSECRET);
    req.userId = id;
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

module.exports = {
  renewToken,
};
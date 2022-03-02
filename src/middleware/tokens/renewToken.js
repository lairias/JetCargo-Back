import jwt from "jsonwebtoken";

import "dotenv/config";
import { HttpError } from "../../helpers/handleError";
export const renewToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token)
      return res.status(203).json({ ok: false, message: "No token provided" });
    const { id } = jwt.verify(token, process.env.JWTSECRET);
    req.userId = id;
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

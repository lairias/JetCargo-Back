import jwt from "jsonwebtoken";
import { USERS } from "../models/Users";
import "dotenv/config";
import { HttpError } from "../helpers/handleError";
import { verifyTokenDate } from "./tokens/verifyToken.Date";
export const verifyTokenPass = async (req, res, next) => {
  const {TOKEN} = req.params
  try {

     if (!verifyTokenDate(TOKEN)) return res.status(403).json({ message: "Token expirado" });
    const { id } = jwt.verify(TOKEN, process.env.JWTSECRETPASSWORD);
    const lock = await USERS.findByPk(id);
    req.userIdR = id;
    if (!lock) return res.status(404).json({ message: "no user found" });
    if (!lock.IND_USR)
      return res.status(404).json({ message: "no user no activo" });
    next();
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

import jwt from "jsonwebtoken";
import { USERS } from "../models/Users";
import "dotenv/config"
import { HttpError } from "../helpers/handleError";

//Falta mejorar la seguridad de la validacion de secrert entre JWT
export const verifyTokenPass = async (req, res,next) => {
  try {
    const token = req.headers["x-pass-reset-token"];
  if (!token) return res.status(403).json({ message: "No token provided" });

    const { id } = jwt.verify(token, process.env.JWTSECRETPASSWORD);
    const lock = await USERS.findByPk(id);
    req.userIdR = id;
    if (!lock) return res.status(404).json({ message: "no user found" });
    if (!lock.IND_USR) return res.status(404).json({ message: "no user no activo" });
    next()
  } catch (error) {
    HttpErrorr(res, error);
    next();
  }
 }
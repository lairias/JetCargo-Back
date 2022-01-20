import jwt from "jsonwebtoken";
import { USERS } from "../models/Users";
 import "dotenv/config";

export const verifyToken = async (req, res,next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    const { id } = jwt.verify(token, process.env.JWTSECRET);  
    req.userId = id;
    next()
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Erro al procesar la petición" });
  }
};
export const verifyIndUser = async (req, res,next) => {

  try {
      const User = await USERS.findByPk(req.userId);
      if (!User) return res.status(404).json({ message: "no user found" });
      if (!User.IND_USR)
        return res.status(404).json({ message: "no user no activo" });
    next()
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Erro al procesar la petición" });
  }
};


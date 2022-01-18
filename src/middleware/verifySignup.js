import jwt from "jsonwebtoken";
import config from "../config";
import { USERS } from "../models/Users";

export const verifyToken = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    const decode = jwt.verify(token, config.JwrSecret);
    const lock = await USERS.findOne({ where: {
        EMAIL: decode.email }});
    req.userId = decode.id;
    if (!lock) return res.status(404).json({ message: "no user found" });
    if (!lock.IND_USR) return res.status(404).json({ message: "no user no activo" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Erro al procesar la petición" });
  }
};

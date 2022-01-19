import jwt from "jsonwebtoken";
import { USERS } from "../models/Users";

 import "dotenv/config";
export const verifyToken = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    const { id } = jwt.verify(token, process.env.JWTSECRET);
    console.log(JwrSecret)
    const lock = await USERS.findByPk(id);
    req.userId = id;
    if (!lock) return res.status(404).json({ message: "no user found" });
    if (!lock.IND_USR) return res.status(404).json({ message: "no user no activo" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Erro al procesar la petición" });
  }
};

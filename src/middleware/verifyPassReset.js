import jwt from "jsonwebtoken";
import config from "../config";
import { USERS } from "../models/Users";

//Falta mejorar la seguridad de la validacion de secrert entre JWT
export const verifyTokenPass = async (req, res) => {
  try {
    const token = req.headers["x-pass-reset-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    const decode = jwt.verify(token, config.JwrSecret_PassReset);

      return res.status(404).json({ message: "no user no activo" });
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Erro al procesar la petición" });
  }
};

import jwt from "jsonwebtoken"
import config from "../config"
import BO_LOCKER  from "../models/BO_locker"

export const verifyToken = async (req,res,next)=>{
    
try{
  
const token = req.headers["x-access-token"];

if (!token) return res.status(403).json({ message: "No token provided" });
const decode = jwt.verify(token, config.JwrSecret);
const lock = await BO_LOCKER.findByPk(decode.id);
if (!lock) return res.status(404).json({ message: "no user found" });
if (!lock.IND_LOCK) return res.status(404).json({ message: "no user no activo" });
next()
}catch(error){
  console.log(error)
    return res.status(501).json({ message: "Erro al procesar la petición" });
    next();
}
}
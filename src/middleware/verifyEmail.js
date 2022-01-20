import {USERS} from "../models/Users"

export const CheckDuplicateEmail = async(req,res,next)=>{

    const {EMAIL} = req.body;
    try{
     if(await USERS.findOne({where: {EMAIL}})) return res.status(400).json({message:"Correo electrónico no disponible"})
     next()
 }catch(error){
      console.log(error);
      res
        .status(501)
        .json({ message: "Error al momento de procesar la peticion " });
      next();
 }
} 

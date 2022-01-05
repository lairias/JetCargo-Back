import { USERS } from "../models/Users";

export const  GetUser = async (req, res,next) => {
  try{

  }catch(error){
    console.log(error)
    res.status(501).json({message:"Error al momento de procesar la peticion "})
    next();
  }
};
export const  GetUsers = async (req, res,next) => {
  try{
  //  const users = await  USERS.findAll()
   const users = await USERS.sequelize.query("CALL  SHOW_USERS");
   res.status(200).json(users)
  }catch(error){
    console.log(error)
    res.status(501).json({message:"Error al momento de procesar la peticion "})
    next();
  }
};
export const  UpdateUser = async (req, res,next) => {
  try{

  }catch(error){
    console.log(error)
    res.status(501).json({message:"Error al momento de procesar la peticion "})
    next();
  }
};
export const  DeleteUser = async (req, res,next) => {
  try{

  }catch(error){
    console.log(error)
    res.status(501).json({message:"Error al momento de procesar la peticion "})
    next();
  }
};
export const  CreateUser = async (req, res,next) => {
  try{

  }catch(error){
    console.log(error)
    res.status(501).json({message:"Error al momento de procesar la peticion "})
    next();
  }
  
};

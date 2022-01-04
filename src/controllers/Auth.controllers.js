import  BO_LOCKER from "../models/BO_locker";
import {encrptPassword} from '../middleware/Bcryt'
export const singUp = async (req,res)=>{
  console.log(req.body)
  const {NAME_LOCKER,CLAVE} = req.body;
  const pass = await encrptPassword(CLAVE);

  const Locker = await BO_LOCKER.create({
    NAME_LOCKER,
    CLAVE: pass,
    USR_ADD: "admin",
  });
    console.log(Locker);

    res.json('signUp')
}
export const singIn = (req,res)=>{
  res.json("signIn");
}
import BO_LOCKER from "../models/BO_locker";
import middleware from "../middleware";
import config  from "../config"
import JWT from "jsonwebtoken";
export const singUp = async (req, res, next) =>
{
  try
  {
    const { NAME_LOCKER, CLAVE } = req.body;
    const Locker = await BO_LOCKER.create({
      NAME_LOCKER,
      CLAVE: await middleware.encrptPassword(CLAVE),
      USR_ADD: "admin",
    });
    const token = JWT.sign({ id: Locker.COD_USER }, config.JwrSecret, {
      expiresIn: 86400,
    });

    res.status(200).json({
      token,
    });
  } catch (error)
  {
    console.log(error);
    next();
  }
};

export const singIn = async (req, res) =>
{
  const { NAME_LOCKER,CLAVE } = req.body;
  try{
    const UserFond = await BO_LOCKER.findOne({
      where: {
        NAME_LOCKER
      },
    });

    if(!UserFond) return res
      .status(400)
      .json({ token: null, message: "Pass o User invalidos" });

    if(! await middleware.compararPassword(CLAVE, UserFond.CLAVE)) return res
      .status(400)
      .json({ token: null, message: "Pass o User invalidos" });
    console.log(UserFond)

     const token = JWT.sign({ id: UserFond.COD_USER }, config.JwrSecret, {
       expiresIn: 86400,
     });

      res.status(200).json({
       token
      });

  }catch(error){
    console.log(error)
    next();
  }
};

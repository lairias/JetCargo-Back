import {USERS} from "../models/Users"
import {Op} from "sequelize"
export const VeryEmail = async (req, res, next) => {
    const {EMAIL,TOKEN,COD_USER} = req.params;

  try {
    const User = await USERS.findOne({ where: { EMAIL } });
    if(!User) return res.status(404).json({message:"Usuario no encontrado"})

  await USERS.update(
    { API_TOKEN: null, IND_USR: 1, EMAIL_VERIFIED: 1 },
    {
      where: {
        API_TOKEN: TOKEN,
        [Op.and]: [{ EMAIL }, { COD_USER }],
      },
    }
  );
    res.status(201).json({ message:"Correo confirmado"
    });
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

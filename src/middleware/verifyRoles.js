import { PA_TypeUsers } from "../models/Pa_typeUsers";

export const verifyRoles = async (req, res, next) => {
    const {NOM_TYPE} = req.body;
  try {
  if (await PA_TypeUsers.findOne({ where: { NOM_TYPE } }))
    return res
      .sendStatus(404)
      .json({ message: "Nombre de rol no disponible" });
  next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(501).json({ message: "Erro al procesar la petición" });
  }
};

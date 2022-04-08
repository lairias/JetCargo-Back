const { PA_TypeUsers } =require( "../models/Pa_typeUsers")

 const verifyRoles = async (req, res, next) => {
  const { NOM_TYPE } = req.body;
  try {
    if (await PA_TypeUsers.findOne({ where: { NOM_TYPE } }))
      return res.status(404).json({ message: "Nombre de rol no disponible" });
    next();
  } catch (error) {
    console.log(error);
    return res.status(501).json({ message: "Erro al procesar la petición" });
  }
};

  module.exports = {
    verifyRoles,
  };
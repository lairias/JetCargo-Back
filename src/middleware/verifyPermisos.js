import sequelize from "../config/database";
export const CityView = async (req, res, next) => {
    
    try{
        const permiso = await sequelize.query(
          "CALL SHOW_PERMISOS_USER(:COD_USER,:NAM_PERMISO)",
          {
            replacements: {
              COD_USER: 17,
              NAM_PERMISO: "city.view",
            },
          }
        );
    if(!permiso) return res.status(403).json({message:"Acceso no Autorizado"})
        next()
    }catch(error){
            console.log(error);
            res
              .status(501)
              .json({ message: "Error al momento de procesar la peticion " });
            next();
    }
};

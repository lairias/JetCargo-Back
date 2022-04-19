const  USERS  =require( "../models/Users")
const sequelize =require( "../config/database/index")
const  {HttpError}  =require( "../helpers/handleError")
const  PA_POEPLE  =require( "../models/Pa_people")
const  REL_PEOPLE_ADDRES  =require( "../models/relations/REL_people_addres")
const  PA_PHONES  =require( "../models/Pa_phones")
const  REL_PEOPLE_PHONE  =require( "../models/relations/REL_people_phone")

exports.GetInformationInvoceByCustomer = async (req, res, next) => {
  const { COD_USER } = req.params;
  try {
    const User = await USERS.findOne({ where: { COD_USER } });
    if (!User)
      return res.status(404).json({ message: "Usuario no encontrado" });
    const people = await PA_POEPLE.findOne({ where: {COD_PEOPLE:User.COD_PEOPLE } });
    if (!people)
      return res.status(404).json({ message: "Usuario no encontrado" });
    const Reldireccion = await REL_PEOPLE_ADDRES.findOne({
      where: { COD_PEOPLE: people.COD_PEOPLE },
    });
    const direccion = await sequelize.query("CALL SHO_ADDRES_BY_CUSTOMER(:COD_ADDRESS)",{
        replacements: {
            COD_ADDRESS: Reldireccion.COD_ADDRESS,
    }})
    
    const RelPhone = await REL_PEOPLE_PHONE.findOne({
      where: { COD_PEOPLE: people.COD_PEOPLE },
    });
    const Phone = await PA_PHONES.findOne({
      where: { COD_PHONE: RelPhone.COD_PHONE },
    });

    res.status(200).json({
        ok: true,
        people,User,Phone,direccion
        });
        
  } catch (error) {
    console.log(error)
    HttpError(res, error);
    next();
  }
};


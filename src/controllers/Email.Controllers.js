const  USERS  = require( "../models/Users")
const { Op } = require( "sequelize")
const  {HttpError}  = require( "../helpers/handleError")
const { transport, NotificacionRecordatorio } =require("../email")
const {PORT_FROND,API_FROND} = require( "../config")
exports.VeryEmail = async (req, res, next) => {
  const { EMAIL, TOKEN, COD_USER } = req.params;
  try {
    const User = await USERS.findOne({ where: { EMAIL } });
    if (!User)
      return res.status(404).json({ message: "Usuario no encontrado" });
    await USERS.update(
      { API_TOKEN: null, IND_USR: 1, EMAIL_VERIFIED: 1 },
      {
        where: {
          API_TOKEN: TOKEN,
          [Op.and]: [{ EMAIL }, { COD_USER }],
        },
      }
    );
    return res.redirect(
      `${API_FROND}:${PORT_FROND}/very/email/`
    );
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

exports.GetEmail = async (req, res, next) => {
  const { EMAIL } = req.params;
  try {
    const User = await USERS.findByPk(EMAIL);
    if (!User)
      return res
        .status(203)
        .json({ message: "Correo electrónico no encontrado", found: null });

    return res.status(200).json({ found: true });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
exports.SendNotificationCustomer = async (req, res, next) => {
  const { COD_CUSTOMER,
    NUM_TRACKING_ } = req.params;
  try {
    const customer = await PA_CUSTOMES.findOne({where: { COD_CUSTOMER }})
    const User = await USERS.findOne({where: {COD_USER:customer.COD_USER}})
    const People = await PA_POEPLE.findOne({where: {COD_PEOPLE:User.COD_PEOPLE}})

    await transport.sendMail(
      NotificacionRecordatorio(
      People.FRISTNAME,
      People.LASTNAME,
        User.EMAIL.replace("@", "%40"),
        req.headers.host,
        NUM_TRACKING_
      )
    );
 
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


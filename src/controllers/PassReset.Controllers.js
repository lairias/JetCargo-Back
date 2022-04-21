const  Se_PASS_RESET  = require( "../models/security/SE_pass_reset")
const  USERS  = require( "../models/Users")
const  PA_POEPLE  = require( "../models/Pa_people")
const JWT = require("jsonwebtoken");
const { encrptPassword } = require( "../helpers/bcrypt")
const { transport, configTransportResetPass } = require( "../email")
const sequelize = require( "../config/database/index")
const  {HttpError}  = require( "../helpers/handleError")
const  SE_SEGURIDAD  = require( "../models/security/Se_seguridad")
require('dotenv').config();

 exports.CreatePassReset = async (req, res, next) => {
  const { EMAIL } = req.body;
  try {
    const UserFond = await USERS.findOne({ where: { EMAIL } });
    if (!UserFond) return res.sendStatus(400);
    const timeToken = await SE_SEGURIDAD.findByPk(1);
    const UserReset = await Se_PASS_RESET.findOne({ where: { EMAIL } });
    const token = JWT.sign(
      { email: UserFond.EMAIL, id: UserFond.COD_USER },
    process.env.JWTSECRETPASSWORD,
      { expiresIn: parseInt(timeToken.DATO_SEGURIDAD) }
    );
    const time = timeToken.DATO_SEGURIDAD / 3600;
    if (UserReset) {
      const People = await PA_POEPLE.findByPk(UserFond.COD_PEOPLE);
      await transport.sendMail(
        configTransportResetPass(
          People.FRISTNAME,
          People.LASTNAME,
          UserFond.EMAIL.replace("@", "%40"),
          token,
          req.headers.host,
          UserFond.COD_USER,
          time
        )
      );
      await Se_PASS_RESET.update(
        { API_TOKEN: token },
        {
          where: {
            EMAIL,
          },
        }
      );
    } else {
      const People = await PA_POEPLE.findByPk(UserFond.COD_PEOPLE);
      await transport.sendMail(
        configTransportResetPass(
          People.FRISTNAME,
          People.LASTNAME,
          UserFond.EMAIL.replace("@", "%40"),
          token,
          req.headers.host,
          UserFond.COD_USER,
          time
        )
      );
      await Se_PASS_RESET.create({ EMAIL, API_TOKEN: token });
    }
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.ForgotPassword = async (req, res, next) => {
  const { TOKEN, COD_USER, CORREO } = req.params;
  const { PASS } = req.body;
  try {
    const UserReset = await Se_PASS_RESET.findOne({
      where: { API_TOKEN: TOKEN },
    });
    if (!UserReset)
      return res
        .status(203)
        .json({ message: "Enlace no valido, por favor intentar de nuevo" });
    if (UserReset == null)
      return res
        .status(203)
        .json({ message: "Enlace no valido, por favor intentar de nuevo" });
    await Se_PASS_RESET.destroy({ where: { EMAIL: CORREO } });
    await USERS.update(
      { PAS_USER: await encrptPassword(PASS) },
      {
        where: {
          COD_USER,
        },
      }
    );
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.GetPassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  try {
    const cities = await Se_PASS_RESET.findByPk(EMAIL);
    if (!cities) return res.status(203).json({ message: "Link no valido" });
    return res.status(200).json(cities);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.UpdatePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  const { API_TOKEN } = req.body;
  try {
    await sequelize
      .query("CALL INS_PASS_RESET(:EMAIL,:API_TOKEN)", {
        replacements: {
          EMAIL,
          API_TOKEN,
        },
      })
      .catch((error) => {
        console.log(error);
        HttpError(res, error);
        throw res.sendStatus(500);
      });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};
 exports.UpdatePassResetAdmin = async (req, res, next) => {
  const { COD_USER } = req.params;
  const { PASS_RESET } = req.body;
  try {
   await USERS.update({PASS_RESET:await encrptPassword(PASS_RESET),IND_INS:true},{where:{COD_USER}})
    return res.status(200).json({ok: true});
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

 exports.DeletePassReset = async (req, res, next) => {
  const { EMAIL } = req.params;
  try {
    await Se_PASS_RESET.destroy({
      where: { EMAIL },
    });
    return res.sendStatus(200);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


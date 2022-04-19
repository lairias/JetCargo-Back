const sequelize =require("../config/database")
const  {HttpError}  =require("../helpers/handleError")

exports.GetPhoneLocker = async (req, res, next) => {
  const { COD_LOCKER } = req.params;
  try {
    const PhoneLocker = await sequelize.query(
      "CALL SHOW_PHONE_LOCKER(:COD_LOCKER)",
      {
        replacements: {
          COD_LOCKER,
        },
      }
    );

    return res.status(200).json(PhoneLocker);
  } catch (error) {
    HttpError(res, error);
    next();
  }
};


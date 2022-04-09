const  SendMessage  =require( "../config/Twilio/Send_msm")
exports.PostMenssge = async (req, res, next) => {
  try {
    await SendMessage("hola", "50498358870");
  } catch (error) {
    console.log(error);
    next();
  }
};

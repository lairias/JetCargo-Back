import { HttpError } from "../helpers/handleError";
import { SendMessage } from "../config/Twilio/Send_msm";
export const PostMenssge = async (req, res, next) => {
  try {
    await SendMessage("hola", "50498358870");
  } catch (error) {
    console.log(error);
    next();
  }
};

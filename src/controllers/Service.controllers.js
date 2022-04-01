//
import { HttpError } from "../helpers/handleError";
import { transport, configTransportVery } from "../email";
import { encrptPassword, compararPassword } from "../helpers/bcrypt";
import sequelize from "../config/database";
import JWT from "jsonwebtoken";
import "dotenv/config";
import { DE_SERVICE } from "../models/DE_service";

export const GetService = async (req, res, next) => {
  try {
    const service = await DE_SERVICE.findAll();
    res.status(200).json({ ok: true, service });
  } catch (error) {
    HttpError(res, error);
    next();
  }
};

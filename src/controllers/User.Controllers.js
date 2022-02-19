//
import { USERS } from "../models/Users";
import { HttpError } from "../helpers/handleError";
import { transport, configTransportVery } from "../email";
import { encrptPassword, compararPassword } from "../helpers/bcrypt";
import sequelize from "../config/database";
import JWT from "jsonwebtoken";
import "dotenv/config";


export const UpdateUser = async (req, res, next) => {
        const {PROFILE_PHOTO_PATH,EMAIL} = req.body;
        const {COD_USER} = req.params;
    try {
        await sequelize.query("CALL UPD_USER()",{replacements:{ COD_USER}})
    } catch (error) {
    HttpError(res, error);
    next();
}
};
















































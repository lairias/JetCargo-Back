import { USERS } from "../models/Users";
import sequelize from "../config/database";
import { PA_TypeUsers } from "../models/Pa_typeUsers";
import { MODEL_HAS_ROLES } from "../models/relations/MODEL_has_typeUser";
import { PA_POEPLE } from "../models/Pa_people";
import { SE_PERMISOS } from "../models/security/SE_permisos";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../models/relations/typeusers_has_permisos";
import { HttpError } from "../helpers/handleError";

export const GetUsers = async (req, res, next) => {
  try {
    //  const users = await  USERS.findAll()
    // const users = await sequelize.query("CALL  SHOW_USERS");
    // const users = await PA_POEPLE.findAll({
    //   include: USERS,
    // });
    const users = await USERS.findAll({
      include: [
        {
          model: MODEL_HAS_ROLES,
        },
        {
          model: PA_TypeUsers,
        },
      ],
    });

    res.status(200).json(users);
  } catch (error) {
  HttpError(res, error);
    next();
  }
};
export const GetUser = async (req, res, next) => {
  try {
    //  const users = await  USERS.findAll()
    // const users = await sequelize.query("CALL  SHOW_USERS");
    // const users = await PA_POEPLE.findAll({
    //   include: USERS,
    // });
    const users = await USERS.findAll({
      include: [
        {
          model: MODEL_HAS_ROLES,
        },
        {
          model: PA_TypeUsers,
        },
      ],
    });

    res.status(200).json(users);
  } catch (error) {
  HttpError(res, error);
    next();
  }
};
export const UpdateUser = async (req, res, next) => {
  try {
  } catch (error) {
  HttpError(res, error);
    next();
  }
};
export const DeleteUser = async (req, res, next) => {
  try {
  } catch (error) {
  HttpError(res, error);
    next();
  }
};
export const CreateUser = async (req, res, next) => {
  try {
  } catch (error) {
  HttpError(res, error);
    next();
  }
};

import { PA_TypeUsers } from "../models/Pa_typeUsers";

export const GetRole = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const GetRoles = async (req, res, next) => {
  try {
    const role = await PA_TypeUsers.findAll();
    res.status(200).json(role);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const UpdateRole = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const DeleteRole = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};
export const CreateRole = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ message: "Error al momento de procesar la peticion " });
    next();
  }
};

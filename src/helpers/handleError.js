import {LOG_ERROR} from "../models/LOG_Errores"

export const HttpError = async (res, error) =>{
await LOG_ERROR.create({
  DES_ERROR: `${error}`,
  HTTP_ERROR: `${res.req.method} /  ${res.req.baseUrl}`,
  STATUS_ERROR: `Error al momento de procesar la peticion - HTTP error 501 `,
});
return res.status(501).json({ message: "Error al momento de procesar la peticion "});
}


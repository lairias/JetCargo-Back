const LOG_ERROR = require("../models/LOG_Errores");
exports.HttpError = async (res, error) => {
  await LOG_ERROR.create({
    DES_ERROR: `${error}`,
    HTTP_ERROR: `${res.req.method} /  ${res.req.baseUrl}`,
    STATUS_ERROR: `Error al momento de procesar la peticion - HTTP error 501 `,
  });
  return;
};


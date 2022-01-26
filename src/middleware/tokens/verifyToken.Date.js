import jwt_decode from "jwt-decode";

export const verifyTokenDate = (token) => {
  const fecha_token = {
    dia: new Date(jwt_decode(token).exp * 1000).getDate(),
    hora: new Date(jwt_decode(token).exp * 1000).getHours(),
    minutos: new Date(jwt_decode(token).exp * 1000).getMinutes(),
};
const fecha_server = {
  dia: new Date().getDate(),
  hora: new Date().getHours(),
  minutos: new Date().getMinutes(),
};
  console.log(fecha_server, "\n", fecha_token);
  if (fecha_server.dia > fecha_token.dia && fecha_server.hora > fecha_token.dia && fecha_server.minutos > fecha_token.minutos) {return true;}else{return false;} 
        
};

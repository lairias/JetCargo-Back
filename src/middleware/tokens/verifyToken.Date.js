import jwt_decode from "jwt-decode";
export const verifyTokenDate = (token) => {
if(Date.now() >=jwt_decode(token).exp * 1000) return false;
return true
};

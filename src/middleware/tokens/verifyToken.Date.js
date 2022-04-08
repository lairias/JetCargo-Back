const jwt_decode =require( "jwt-decode")
 const verifyTokenDate = (token) => {
  if (Date.now() >= jwt_decode(token).exp * 1000) return false;
  return true;
};

module.exports = {
  verifyTokenDate,
};
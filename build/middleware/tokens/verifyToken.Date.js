"use strict";

var jwt_decode = require("jwt-decode");

var verifyTokenDate = function verifyTokenDate(token) {
  if (Date.now() >= jwt_decode(token).exp * 1000) return false;
  return true;
};

module.exports = {
  verifyTokenDate: verifyTokenDate
};
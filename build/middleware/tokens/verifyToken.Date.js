"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyTokenDate = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifyTokenDate = function verifyTokenDate(token) {
  if (Date.now() >= (0, _jwtDecode["default"])(token).exp * 1000) return false;
  return true;
};

exports.verifyTokenDate = verifyTokenDate;
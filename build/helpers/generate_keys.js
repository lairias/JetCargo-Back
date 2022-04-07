"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JwrSecret_PassReset = exports.JwrSecret = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var JwrSecret = _crypto["default"].randomBytes(32).toString("hex");

exports.JwrSecret = JwrSecret;

var JwrSecret_PassReset = _crypto["default"].randomBytes(32).toString("hex");

exports.JwrSecret_PassReset = JwrSecret_PassReset;
console.log(JwrSecret);
console.log(JwrSecret_PassReset);
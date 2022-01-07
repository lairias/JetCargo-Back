"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODEL_TYPEUSER_HAS_PERMISOS = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MODEL_TYPEUSER_HAS_PERMISOS = _database["default"].define("MOD_typeusers_has_permisos", {}, {
  createdAt: false,
  updatedAt: false
});

exports.MODEL_TYPEUSER_HAS_PERMISOS = MODEL_TYPEUSER_HAS_PERMISOS;
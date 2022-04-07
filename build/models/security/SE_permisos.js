"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SE_PERMISOS = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SE_PERMISOS = _database["default"].define("SE_Permisos", {
  COD_PERMISO: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE PERMISOS"
  },
  NAM_PERMISOS: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    unique: true,
    comment: "NAME OF PERMISSIONS"
  },
  DES_PERMISOS: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "DESCRIPTION OF PERMISSO"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.SE_PERMISOS = SE_PERMISOS;
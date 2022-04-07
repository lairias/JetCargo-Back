"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SE_SEGURIDAD = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SE_SEGURIDAD = _database["default"].define("SE_Seguridad", {
  COD_SEGURIDAD: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE SEGURIDAD"
  },
  NAM_SEGURIDAD: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    unique: true,
    comment: "NAME OF SEGURIDAD"
  },
  DATO_SEGURIDAD: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "DESCRIPTION OF SEGURIDAD"
  },
  DES_SEGURIDAD: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "DESCRIPTION OF SEGURIDAD"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.SE_SEGURIDAD = SE_SEGURIDAD;
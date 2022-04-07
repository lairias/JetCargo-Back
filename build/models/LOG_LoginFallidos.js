"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGINFALLIDOS = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LOGINFALLIDOS = _database["default"].define("LOG_LoginFallidos", {
  COD_LOGINFALLIDOS: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE ERROR"
  },
  COD_USER: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "DESCRIPTION OF ERROR"
  },
  COUNT_ERROR: {
    type: _sequelize.Sequelize.STRING(2000),
    allowNull: false,
    comment: "CURRENT ERROR COUNT"
  },
  DAT_ADD: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.LOGINFALLIDOS = LOGINFALLIDOS;
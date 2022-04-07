"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Se_PASS_RESET = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Se_PASS_RESET = _database["default"].define("SE_PassReset", {
  EMAIL: {
    type: _sequelize.Sequelize.STRING(120),
    primaryKey: true,
    allowNull: false,
    comment: "DIRECCION DEL CORREO ELECTRONICO"
  },
  API_TOKEN: {
    type: _sequelize.Sequelize.STRING(250),
    allowNull: false,
    comment: "VALIDACION DE TOKEN PARA RESETEO"
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

exports.Se_PASS_RESET = Se_PASS_RESET;
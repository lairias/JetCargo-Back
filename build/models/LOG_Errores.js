"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_ERROR = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LOG_ERROR = _database["default"].define("LOG_Error", {
  COD_ERROR: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE ERROR"
  },
  DES_ERROR: {
    type: _sequelize.Sequelize.TEXT,
    allowNull: false,
    comment: "DESCRIPTION OF ERROR"
  },
  HTTP_ERROR: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false,
    comment: "METHODO OF HTTP"
  },
  STATUS_ERROR: {
    type: _sequelize.Sequelize.TEXT,
    allowNull: false,
    comment: "STATUS OF ERROR"
  },
  DAT_ADD_ERROR: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.LOG_ERROR = LOG_ERROR;
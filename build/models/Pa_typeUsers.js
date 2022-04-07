"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_TypeUsers = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_TypeUsers = _database["default"].define("PA_TypeUsers", {
  COD_TYPEUSERS: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "THE PRIMARY KEY OF TYPE OF USER"
  },
  NOM_TYPE: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    unique: true,
    comment: "THE NAME OF THE TYPE OF USER"
  },
  DES_TYPE: {
    type: _sequelize.Sequelize.STRING(250),
    allowNull: false,
    comment: "DESCRIPTION OF THE TYPE OF USER"
  },
  USR_ADD: {
    type: _sequelize.Sequelize.STRING(30),
    allowNull: false,
    comment: "USER THAT ADDED THIS ROW"
  },
  USR_UPD: {
    type: _sequelize.Sequelize.STRING(30),
    comment: "USER WHO MODIFIED THIS ROW"
  },
  DAT_ADD: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED"
  },
  DAT_UPD: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.PA_TypeUsers = PA_TypeUsers;
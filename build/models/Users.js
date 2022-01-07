"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USERS = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var USERS = _database["default"].define("users", {
  COD_USER: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "THE PRIMARY KEY OF THE USER"
  },
  EMAIL: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    unique: true,
    comment: "THE EMAIL OF THE USER"
  },
  EMAIL_VERIFIED: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    comment: "THE EMAIL OF THE USER"
  },
  PAS_USER: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    unique: true,
    comment: "THE EMAIL OF THE USER"
  },
  API_TOKEN: {
    type: _sequelize.Sequelize.STRING(255),
    comment: "TOKEN DE ACCESO"
  },
  IND_USR: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "IND OF THE USER TO ACCESS THE SYSTEM, 0=INACTIVE 1=ACTIVE"
  },
  IND_INS: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "IND OF THE FIRST TIME IN THE SYSTEM."
  },
  USR_ADD: {
    type: _sequelize.Sequelize.STRING(30),
    allowNull: false,
    comment: "USER THAT ADDED THIS ROW	"
  },
  USR_UPD: {
    type: _sequelize.Sequelize.STRING(30),
    comment: "USER WHO MODIFIED THIS ROW	"
  },
  DAT_ADD: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.USERS = USERS;
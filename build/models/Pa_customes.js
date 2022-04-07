"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_CUSTOMES = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_CUSTOMES = _database["default"].define("PA_Customers", {
  COD_CUSTOMER: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "THE PRIMARY KEY OF THE TYPE OF CUSTOMERS"
  },
  COD_USER: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "THRE CODE KEY OF THE USER"
  },
  IND_TYPCUST: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "IND OF THE TYPE OF CUSTOMER"
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

exports.PA_CUSTOMES = PA_CUSTOMES;
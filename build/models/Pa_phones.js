"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_PHONES = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_PHONES = _database["default"].define("PA_phone", {
  COD_PHONE: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF A PHONE NUMBER"
  },
  NUM_AREA: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "NUMBER OF AREA TO CALL"
  },
  NUM_PHONE: {
    //   type: Sequelize.ENUM("ID", "PASSPORT", "LICENSE"),
    type: _sequelize.Sequelize.INTEGER(10),
    allowNull: false,
    comment: "PHONE NUMBER OF THE PERSON"
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

exports.PA_PHONES = PA_PHONES;
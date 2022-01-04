"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_ADDRES = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_ADDRES = _database["default"].define("PA_addres", {
  COD_ADDRESS: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE PERSON"
  },
  TYP_ADDRESS: {
    type: _sequelize.Sequelize.ENUM("H", "W", "A"),
    allowNull: false,
    comment: "TYPE OF ADDRESS H:HOME W:WORK A:ADDRESS"
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

exports.PA_ADDRES = PA_ADDRES;
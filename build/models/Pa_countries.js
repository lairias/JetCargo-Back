"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_COUNTRIES = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_COUNTRIES = _database["default"].define("PA_Countries", {
  COD_COUNTRY: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE COUNTRY"
  },
  NAM_COUNTRY: {
    type: _sequelize.Sequelize.STRING(80),
    allowNull: false,
    comment: "NAME OF THE COUNTRY"
  },
  IND_COUNTRY: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF COUNTRY"
  },
  DES_COUNTRY: {
    type: _sequelize.Sequelize.STRING(1000),
    allowNull: false,
    comment: "DESCRIPTION OF THE COUNTRY"
  },
  AREA_COUNTRY: {
    type: _sequelize.Sequelize.STRING(40),
    allowNull: false,
    comment: "AREA OF THE COUNTRY"
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

exports.PA_COUNTRIES = PA_COUNTRIES;
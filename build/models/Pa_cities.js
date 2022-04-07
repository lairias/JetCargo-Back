"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_CITIES = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_CITIES = _database["default"].define("PA_City", {
  COD_CITY: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE CITY"
  },
  COD_STATE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE STATE"
  },
  NAM_CITY: {
    type: _sequelize.Sequelize.STRING(100),
    allowNull: false,
    comment: "NAME OF THE CITY"
  },
  ZIP_CODE: {
    type: _sequelize.Sequelize.INTEGER(32),
    allowNull: false,
    comment: "ZIP CODE OF THE CITY"
  },
  POS_CODE: {
    type: _sequelize.Sequelize.INTEGER(32),
    comment: "POSTAL CODE OF THE CITY"
  },
  POPULATION: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "POPULATION OF THE CITY"
  },
  CURRENCY: {
    type: _sequelize.Sequelize.STRING(20),
    allowNull: false,
    comment: "CURRENCY OF THE CITY"
  },
  IND_CITY: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF COUNTRY"
  },
  TIMEZONE: {
    type: _sequelize.Sequelize.STRING(20),
    allowNull: false,
    comment: "TIMEZONE OF THE CITY"
  },
  LATITUDE: {
    type: _sequelize.Sequelize.STRING(20),
    comment: "LATITUDE OF THE CITY"
  },
  LONGITUDE: {
    type: _sequelize.Sequelize.STRING(20),
    comment: "LONGITUDE OF THE CITY"
  },
  DES_CITY: {
    type: _sequelize.Sequelize.STRING(2000),
    allowNull: false,
    comment: "DESCRIPTION OF THE CITY"
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

exports.PA_CITIES = PA_CITIES;
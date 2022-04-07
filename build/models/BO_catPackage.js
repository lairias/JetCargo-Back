"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BO_CATPACKAGE = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BO_CATPACKAGE = _database["default"].define("BO_CatPackage", {
  COD_CATPACKAGE: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE PACKAGE CATEGORY "
  },
  NAM_CATPACKAGE: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "NAME OF THE PACKAGE CATEGORY"
  },
  DES_CATPACKAGE: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "DESCRIPTION OF THE PACKAGE CATEGORY"
  },
  IND_CATPACKAGE: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF THE PACKAGE CATEGORY"
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
  DAT_ADD_CATPACKAGE: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_CATPACKAGE: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.BO_CATPACKAGE = BO_CATPACKAGE;
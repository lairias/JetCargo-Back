"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BO_TYPEPACKAGE = void 0;

var _sequelize = require("sequelize");

var _index = _interopRequireDefault(require("../config/database/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BO_TYPEPACKAGE = _index["default"].define("BO_TypePackage", {
  COD_TYPEPACKAGE: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE TYPE OF PACKAGE"
  },
  NAM_TYPEPACKAGE: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "NAME OF THE TYPE OF PACKAGE"
  },
  DES_TYPEPACKAGE: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "VALIDACION DE TOKEN PARA RESETEO"
  },
  IMG_TYPEPACKAGE: {
    type: _sequelize.Sequelize.STRING(255),
    comment: "IMAGEN DE TOKEN PARA RESETEO"
  },
  IND_TYPEPACKAGE: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF TYPE PACKAGE "
  },
  PREC_TYPEPACKAGE: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "STATUS OF TYPE PACKAGE "
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
  DAT_ADD_TYPEPACKAGE: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_TYPEPACKAGE: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.BO_TYPEPACKAGE = BO_TYPEPACKAGE;
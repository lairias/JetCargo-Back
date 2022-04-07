"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BO_PACKAGE = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BO_PACKAGE = _database["default"].define("BO_Package", {
  COD_PACKAGE: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE PACKAGE"
  },
  COD_CATPACKAGE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE PACKAGE CATEGORY"
  },
  COD_TYPEPACKAGE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE TYPE OF PACKAGE"
  },
  NOM_PACKAGE: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "NOM OF PACKAGE"
  },
  NUM_PACKAGE: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "NUM OF PACKAGE"
  },
  HEIGHT_PACKAGE: {
    type: _sequelize.Sequelize.STRING(60),
    comment: "HEIGHT OF PACKAGE"
  },
  WIDTH_PACKAGE: {
    type: _sequelize.Sequelize.STRING(60),
    comment: "WIDTH OF PACKAGE"
  },
  LENGTH_PACKAGE: {
    type: _sequelize.Sequelize.STRING(60),
    comment: "LENGTH OF PACKAGE"
  },
  WEIGHT_PACKAGE: {
    type: _sequelize.Sequelize.STRING(60),
    comment: "WEIGHT OF PACKAGE"
  },
  PRICE_PACKAGE: {
    type: _sequelize.Sequelize.STRING(60),
    comment: "PRICE OF PACKAGE"
  },
  PAYMENT_CANCELLED: {
    type: _sequelize.Sequelize.BOOLEAN,
    comment: "PRICE OF PACKAGE"
  },
  VOL_PACKAGE: {
    type: _sequelize.Sequelize.STRING(60),
    comment: "VOLUME FO PACKAGE"
  },
  IND_PACKAGE: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF PACKAGE"
  },
  USR_ADD: {
    type: _sequelize.Sequelize.STRING(30),
    comment: "USER THAT ADDED THIS ROW	"
  },
  USR_UPD: {
    type: _sequelize.Sequelize.STRING(30),
    comment: "USER WHO MODIFIED THIS ROW	"
  },
  DAT_ADD_PACKAGE: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_PACKAGE: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.BO_PACKAGE = BO_PACKAGE;
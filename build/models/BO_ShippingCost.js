"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BO_SHIPPINGCOST = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BO_SHIPPINGCOST = _database["default"].define("BO_ShippingCost", {
  COD_SHIPPINGCOST: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE SHIPPING COST "
  },
  COD_PACKAGE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE PACKAGE"
  },
  COST_DELIVERY: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "COST DELIVERY OF THE SHIPPING COST"
  },
  COST_INTRODUCTION: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "COST OF INTRODUCTION OF THE SHIPPING COST"
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
  DAT_ADD_SHIPPINGCOST: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_SHIPPINGCOST: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.BO_SHIPPINGCOST = BO_SHIPPINGCOST;
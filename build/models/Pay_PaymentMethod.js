"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PAY_PAYMENTMETHOD = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PAY_PAYMENTMETHOD = _database["default"].define("PAY_PaymentMethod", {
  COD_PAYMENTMETHOD: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE PAYMENT METHOD"
  },
  COD_PEOPLE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF PEOPLE"
  },
  DES_PAYMENTMETHOD: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "DESCRICTION  OF PAYMENT METHOD"
  },
  IND_PAYMENT: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF PAYMENT METHOD"
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

exports.PAY_PAYMENTMETHOD = PAY_PAYMENTMETHOD;
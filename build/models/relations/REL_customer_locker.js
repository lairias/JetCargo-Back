"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REL_CUSTOMER_LOKER = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var REL_CUSTOMER_LOKER = _database["default"].define("REL_customer_locker", {
  COD_REL_CUSTOMERLOCKER: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "RELATIONSHIP BETWEEN CUSTOMER AND LOCAKERS"
  },
  COD_CUSTOMER: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF CUTOMER"
  },
  COD_LOCKER: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE LOCKER"
  },
  DAT_ADD: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.REL_CUSTOMER_LOKER = REL_CUSTOMER_LOKER;
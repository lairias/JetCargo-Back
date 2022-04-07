"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REL_LOCKER_PHONE = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var REL_LOCKER_PHONE = _database["default"].define("REL_locker_phone", {
  COD_REL_LOCKERPHONE: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "RELATIONSHIP BETWEEN PEOPLE AND EMAILS"
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

exports.REL_LOCKER_PHONE = REL_LOCKER_PHONE;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_EMAIL = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_EMAIL = _database["default"].define("PA_Email", {
  COD_EMAIL: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE EMAIL"
  },
  USEREMAIL: {
    type: _sequelize.Sequelize.STRING(200),
    allowNull: false,
    comment: "USER OF THE EMAIL ADDRESS"
  },
  TYP_EMAIL: {
    type: _sequelize.Sequelize.ENUM("P", "O"),
    allowNull: false,
    comment: "P:personal O:office"
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

exports.PA_EMAIL = PA_EMAIL;
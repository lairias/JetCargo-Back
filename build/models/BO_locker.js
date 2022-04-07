"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BO_LOCKER = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BO_LOCKER = _database["default"].define("BO_Loker", {
  COD_LOCKER: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE LOCKER"
  },
  COD_PEOPLE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE PEOPLE"
  },
  NUM_LOCKER: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "NUM OF LOCKER"
  },
  ADDRES_LOCKER: {
    type: _sequelize.Sequelize.STRING(255),
    allowNull: false,
    comment: "ADDRES OF LOCKER"
  },
  TEL_LOCKER: {
    type: _sequelize.Sequelize.STRING(255),
    allowNull: false,
    comment: "ADDRES OF LOCKER"
  },
  IND_LOCKER: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF LOCKER"
  },
  TYP_LOCKER: {
    type: _sequelize.Sequelize.STRING(80),
    allowNull: false,
    comment: "TYPE OF LOCKER"
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
  DAT_ADD_COD_LOCKER: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_COD_LOCKER: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.BO_LOCKER = BO_LOCKER;
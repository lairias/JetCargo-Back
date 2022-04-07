"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BO_TRACKING = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BO_TRACKING = _database["default"].define("BO_Tracking", {
  COD_TRACKING: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE TRACKING"
  },
  COD_PACKAGE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE PACKAGE"
  },
  COD_SERVICE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "DESCRICTION  OF TRACKING"
  },
  DES_TRACKING: {
    type: _sequelize.Sequelize.STRING(255),
    allowNull: false,
    comment: "DESCRICTION  OF TRACKING"
  },
  NUM_TRACKING: {
    type: _sequelize.Sequelize.STRING(255),
    allowNull: false,
    comment: "NUMBER OF TRACKING"
  },
  RECEIVED_TRACKING: {
    type: _sequelize.Sequelize.ENUM("PENDING", "RECEIVED", "DELIVERED", "CANCELED", "IN_PROGRESS"),
    defaultValue: "PENDING",
    allowNull: false
  },
  IND_TRACKING: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF COUNTRY"
  },
  DAT_ADD_TRACKING: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_TRACKING: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.BO_TRACKING = BO_TRACKING;
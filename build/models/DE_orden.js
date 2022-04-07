"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DE_ORDEN = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DE_ORDEN = _database["default"].define("DE_Ordenes", {
  COD_ORDEN: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE LOCKER"
  },
  COD_TRACKING: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE PEOPLE"
  },
  NUM_ORDEN: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "COD OF THE PEOPLE"
  },
  CHECKPOINT_STATUS: {
    type: _sequelize.Sequelize.ENUM("PENDING", "IN_PROGRESS", "COMPLETED"),
    allowNull: false,
    defaultValue: "PENDING",
    comment: "COD OF THE PEOPLE"
  },
  IND_ORDEN: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "STATUS OF ORDEN"
  },
  ARCHIVED: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: "COD OF THE PEOPLE"
  },
  DAT_ADD_ORDEN: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_ORDEN: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.DE_ORDEN = DE_ORDEN;
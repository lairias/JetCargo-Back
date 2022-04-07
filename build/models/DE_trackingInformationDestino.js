"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DE_TRACKING_INFORMATION_DESTINO = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DE_TRACKING_INFORMATION_DESTINO = _database["default"].define("DE_TrackingDestino", {
  COD_TRACKINFORMATION_DESTINO: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE DELIVERY SERVICE"
  },
  COD_ORDEN: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE ORDER"
  },
  COD_DESTINATION_COUNTRY: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE DESTINATION COUNTRY"
  },
  COD_DESTINATION_STATE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE DESTINATION STATE "
  },
  COD_DESTINATION_CITY: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE DESTINATION CITY "
  },
  CHECKPOINT_DELIVERY_STATUS: {
    type: _sequelize.Sequelize.ENUM("PENDING", "DELIVERED", "FAILED"),
    defaultValue: "PENDING",
    allowNull: false
  },
  DAT_ADD_TRACKINFORMATION: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_TRACKINFORMATION: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.DE_TRACKING_INFORMATION_DESTINO = DE_TRACKING_INFORMATION_DESTINO;
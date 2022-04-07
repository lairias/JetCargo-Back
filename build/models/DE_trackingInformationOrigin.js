"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DE_TRACKING_INFORMATION_ORIGEN = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DE_TRACKING_INFORMATION_ORIGEN = _database["default"].define("DE_TrackingOrigen", {
  COD_TRACKINFORMATION_ORIGIN: {
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
  COD_ORIGIN_COUNTRY: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE ORIGIN COUNTRY"
  },
  COD_ORIGIN_STATE: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE ORIGIN STATE"
  },
  COD_ORIGIN_CITY: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE ORIGIN CITY"
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

exports.DE_TRACKING_INFORMATION_ORIGEN = DE_TRACKING_INFORMATION_ORIGEN;
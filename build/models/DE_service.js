"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DE_SERVICE = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DE_SERVICE = _database["default"].define("DE_service", {
  COD_SERVICE: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE DELIVERY SERVICE"
  },
  SERVICE_NAME: {
    type: _sequelize.Sequelize.STRING(255),
    allowNull: false
  },
  SERVICE_CODE: {
    type: _sequelize.Sequelize.STRING(50),
    allowNull: false
  },
  SERVICE_PHONE: {
    type: _sequelize.Sequelize.STRING(120)
  },
  SERVICE_URL: {
    type: _sequelize.Sequelize.STRING(255)
  },
  SERVICE_LOGO: {
    type: _sequelize.Sequelize.STRING(255)
  },
  DAT_ADD_SERVICE: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_SERVICE: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.DE_SERVICE = DE_SERVICE;
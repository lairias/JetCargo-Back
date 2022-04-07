"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REL_ORIGIN_DESTINO = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var REL_ORIGIN_DESTINO = _database["default"].define("REL_origin_destino", {
  COD_REL_ORIGIN_DESTINO: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "RELATIONSHIP BETWEEN PACKAGE AND LOCAKERS"
  },
  COD_ORDEN: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE LOCKER"
  },
  COD_DESTINO: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE LOCKER"
  },
  COD_ORIGIN: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE PACKAGE"
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

exports.REL_ORIGIN_DESTINO = REL_ORIGIN_DESTINO;
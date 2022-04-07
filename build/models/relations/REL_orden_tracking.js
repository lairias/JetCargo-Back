"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REL_ORDEN_TRACKING = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var REL_ORDEN_TRACKING = _database["default"].define("REL_orden_tracking", {
  COD_ORDENTRACKING: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF PEOPLE"
  },
  COD_ORDEN: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF USER"
  },
  COD_TRACKING: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF USER"
  },
  DAT_ADD_ORDENTRACKING: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: _sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  },
  DAT_UPD_ORDENTRACKING: {
    type: _sequelize.Sequelize.DATE,
    comment: "DATE THIS ROW WAS MODIFIED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.REL_ORDEN_TRACKING = REL_ORDEN_TRACKING;
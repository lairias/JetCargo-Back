"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODEL_HAS_ROLES = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MODEL_HAS_ROLES = _database["default"].define("MOD_has_typeuser", {
  COD_TYPEUSERS: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF PEOPLE"
  },
  COD_USER: {
    type: _sequelize.Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF USER"
  }
}, {
  createdAt: false,
  updatedAt: false
});

exports.MODEL_HAS_ROLES = MODEL_HAS_ROLES;
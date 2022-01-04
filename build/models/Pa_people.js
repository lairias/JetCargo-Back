"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PA_POEPLE = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PA_POEPLE = _database["default"].define("PA_people", {
  COD_PEOPLE: {
    type: _sequelize.Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE PERSON"
  },
  ID: {
    type: _sequelize.Sequelize.STRING(60),
    allowNull: false,
    comment: "THE ID OF THE PERSON, IT COULD THE PASSPORT OR NATIONAL ID"
  },
  TIP_DOCUMENT: {
    type: _sequelize.Sequelize.ENUM("ID", "PASSPORT", "LICENSE"),
    allowNull: false,
    comment: "THE TYPE OF DOCUMENTATION OF THE PERSON"
  },
  FRISTNAME: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "THE FIRTS NAME OF A PERSON"
  },
  MIDDLENAME: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "THE MIDDLE NAME OF A PERSON"
  },
  LASTNAME: {
    type: _sequelize.Sequelize.STRING(120),
    allowNull: false,
    comment: "THE LAST NAME OF A PERSON"
  },
  AGE: {
    type: _sequelize.Sequelize.STRING(20),
    allowNull: false,
    comment: "THE AGE OF A PERSON"
  },
  TIP_PERSON: {
    type: _sequelize.Sequelize.ENUM("N", "J"),
    allowNull: false,
    comment: "THE AGE OF A PERSON"
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

exports.PA_POEPLE = PA_POEPLE;
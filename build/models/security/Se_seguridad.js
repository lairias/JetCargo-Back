"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var db = require("../../config/database");

var SE_SEGURIDAD = db.define("SE_Seguridad", {
  COD_SEGURIDAD: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE SEGURIDAD"
  },
  NAM_SEGURIDAD: {
    type: Sequelize.STRING(120),
    allowNull: false,
    unique: true,
    comment: "NAME OF SEGURIDAD"
  },
  DATO_SEGURIDAD: {
    type: Sequelize.STRING(120),
    allowNull: false,
    comment: "DESCRIPTION OF SEGURIDAD"
  },
  DES_SEGURIDAD: {
    type: Sequelize.STRING(120),
    allowNull: false,
    comment: "DESCRIPTION OF SEGURIDAD"
  }
}, {
  createdAt: false,
  updatedAt: false
});
module.exports = SE_SEGURIDAD;
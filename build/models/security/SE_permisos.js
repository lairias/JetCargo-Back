"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var db = require("../../config/database");

var SE_PERMISOS = db.define("SE_Permisos", {
  COD_PERMISO: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "COD OF THE PERMISOS"
  },
  NAM_PERMISOS: {
    type: Sequelize.STRING(120),
    allowNull: false,
    unique: true,
    comment: "NAME OF PERMISSIONS"
  },
  DES_PERMISOS: {
    type: Sequelize.STRING(120),
    allowNull: false,
    comment: "DESCRIPTION OF PERMISSO"
  }
}, {
  createdAt: false,
  updatedAt: false
});
module.exports = SE_PERMISOS;
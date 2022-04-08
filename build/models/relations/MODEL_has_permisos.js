"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var db = require("../../config/database");

var MODEL_HAS_PERMISOS = db.define("MOD_has_permisos", {}, {
  createdAt: false,
  updatedAt: false
});
module.exports = MODEL_HAS_PERMISOS;
const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const MODEL_HAS_PERMISOS = db.define(
  "MOD_has_permisos",
  {},
  {
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = MODEL_HAS_PERMISOS;
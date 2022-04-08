"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var db = require("../../config/database");

var MODEL_HAS_ROLES = db.define("MOD_has_typeuser", {
  COD_TYPEUSERS: {
    type: Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF PEOPLE"
  },
  COD_USER: {
    type: Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF USER"
  }
}, {
  createdAt: false,
  updatedAt: false
});
module.exports = MODEL_HAS_ROLES;
const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const MODEL_HAS_ROLES = db.define(
  "MOD_has_typeuser",
  {
    COD_TYPEUSERS: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF TYPE OF PEOPLE",
    },
    COD_USER: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF TYPE OF USER",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = MODEL_HAS_ROLES;

const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const Se_PASS_RESET = db.define(
  "SE_PassReset",
  {
    EMAIL: {
      type: Sequelize.STRING(120),
      primaryKey: true,
      allowNull: false,
      comment: "DIRECCION DEL CORREO ELECTRONICO",
    },
    API_TOKEN: {
      type: Sequelize.STRING(250),
      allowNull: false,
      comment: "VALIDACION DE TOKEN PARA RESETEO",
    },

    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports =Se_PASS_RESET
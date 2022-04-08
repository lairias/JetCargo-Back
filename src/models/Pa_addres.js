const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const PA_ADDRES = db.define(
  "PA_Addres",
  {
    COD_ADDRESS: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PERSON",
    },
    COD_COUNTRY: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE COUNTRY",
    },
    COD_STATE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE STATE",
    },
    COD_CITY: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE CITY",
    },
    DES_ADDRESS: {
      type: Sequelize.STRING(250),
      allowNull: false,
      comment: "DESCRIPTION  ADDRESS ",
    },
    USR_ADD: {
      type: Sequelize.STRING(30),
      allowNull: false,
      comment: "USER THAT ADDED THIS ROW",
    },
    USR_UPD: {
      type: Sequelize.STRING(30),
      comment: "USER WHO MODIFIED THIS ROW",
    },
    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED",
    },
    DAT_UPD: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = PA_ADDRES
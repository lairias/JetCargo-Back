const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const PA_TypeUsers = db.define(
  "PA_TypeUsers",
  {
    COD_TYPEUSERS: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "THE PRIMARY KEY OF TYPE OF USER",
    },
    NOM_TYPE: {
      type: Sequelize.STRING(60),
      allowNull: false,
      unique: true,
      comment: "THE NAME OF THE TYPE OF USER",
    },
    DES_TYPE: {
      type: Sequelize.STRING(250),
      allowNull: false,
      comment: "DESCRIPTION OF THE TYPE OF USER",
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
module.exports =PA_TypeUsers
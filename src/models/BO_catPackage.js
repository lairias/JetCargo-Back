const {Sequelize} = require("sequelize")
const db = require("../config/database");
const BO_CATPACKAGE = db.define(
  "BO_CatPackage",
  {
    COD_CATPACKAGE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PACKAGE CATEGORY ",
    },
    NAM_CATPACKAGE: {
      type: Sequelize.STRING(120),
      comment: "NAME OF THE PACKAGE CATEGORY",
    },
    DES_CATPACKAGE: {
      type: Sequelize.STRING(120),
      comment: "DESCRIPTION OF THE PACKAGE CATEGORY",
    },
    IND_CATPACKAGE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF THE PACKAGE CATEGORY",
    },
  
    USR_ADD: {
      type: Sequelize.STRING(30),
      comment: "USER THAT ADDED THIS ROW	",
    },
    USR_UPD: {
      type: Sequelize.STRING(30),
      comment: "USER WHO MODIFIED THIS ROW	",
    },
    DAT_ADD_CATPACKAGE: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_CATPACKAGE: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = BO_CATPACKAGE
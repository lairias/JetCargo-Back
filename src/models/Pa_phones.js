const {Sequelize} = require("sequelize")
const db = require("../config/database");
 const PA_PHONES = db.define(
  "PA_Phone",
  {
    COD_PHONE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF A PHONE NUMBER",
    },
    NUM_AREA: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "NUMBER OF AREA TO CALL",
    },
    NUM_PHONE: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      comment: "PHONE NUMBER OF THE PERSON",
    },
    USR_ADD: {
      type: Sequelize.STRING(30),
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
module.exports =PA_PHONES
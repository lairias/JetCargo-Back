const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const PA_CUSTOMES = db.define(
  "PA_Customers",
  {
    COD_CUSTOMER: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "THE PRIMARY KEY OF THE TYPE OF CUSTOMERS",
    },

    COD_USER: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "THRE CODE KEY OF THE USER",
    },

    IND_TYPCUST: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "IND OF THE TYPE OF CUSTOMER",
    },
    USR_ADD: {
      type: Sequelize.STRING(30),
      allowNull: false,
      comment: "USER THAT ADDED THIS ROW	",
    },
    USR_UPD: {
      type: Sequelize.STRING(30),
      comment: "USER WHO MODIFIED THIS ROW	",
    },
    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD: {
      type: Sequelize.DATE,

      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = PA_CUSTOMES
const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const PAY_PAYMENTMETHOD = db.define(
  "PAY_PaymentMethod",
  {
    COD_PAYMENTMETHOD: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PAYMENT METHOD",
    },

    COD_PEOPLE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF PEOPLE",
    },

    DES_PAYMENTMETHOD: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "DESCRICTION  OF PAYMENT METHOD",
    },
    IND_PAYMENT: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF PAYMENT METHOD",
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
module.exports =PAY_PAYMENTMETHOD
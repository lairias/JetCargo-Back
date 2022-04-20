const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const BO_SHIPPINGCOST = db.define(
  "BO_ShippingCost",
  {
    COD_SHIPPINGCOST: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE SHIPPING COST ",
    },
    
    NOM_METRICO: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: "COST DELIVERY OF THE SHIPPING COST",
    },
    DATA_METRICO: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "COST DELIVERY OF THE SHIPPING COST",
    },
    DES_METRICO: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: "COST DELIVERY OF THE SHIPPING COST",
    },
    SPAN_METRICO: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: "COST DELIVERY OF THE SHIPPING COST",
    },
    MIN_SHIPPINGCOST: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "COST DELIVERY OF THE SHIPPING COST",
    },
    
   
    USR_UPD: {
      type: Sequelize.STRING(30),
      comment: "USER WHO MODIFIED THIS ROW	",
    },
    DAT_ADD_SHIPPINGCOST: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_SHIPPINGCOST: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports =BO_SHIPPINGCOST
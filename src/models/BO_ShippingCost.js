import { Sequelize } from "sequelize";
import db from "../config/database";

const BO_SHIPPINGCOST = db.define(
  "BO_shippingcost",
  {
    COD_SHIPPINGCOST: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE SHIPPING COST ",
    },
    COD_PACKAGE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PACKAGE",
    },
    COST_DELIVERY: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "COST DELIVERY OF THE SHIPPING COST",
    },
    COST_INTRODUCTION: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "COST OF INTRODUCTION OF THE SHIPPING COST",
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

export default BO_SHIPPINGCOST;

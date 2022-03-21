import { Sequelize } from "sequelize";
import db from "../config/database";

export const BO_PACKAGE = db.define(
  "BO_Package",
  {
    COD_PACKAGE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PACKAGE",
    },
    COD_CATPACKAGE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PACKAGE CATEGORY",
    },
    COD_TYPEPACKAGE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE TYPE OF PACKAGE",
    },
    NOM_PACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "NOM OF PACKAGE",
    },
    NUM_PACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "NUM OF PACKAGE",
    },
    HEIGHT_PACKAGE: {
      type: Sequelize.STRING(60),
      allowNull: false,
      defaultValue: " ",
      comment: "HEIGHT OF PACKAGE",
    },
    WIDTH_PACKAGE: {
      type: Sequelize.STRING(60),
      allowNull: false,
      defaultValue: " ",
      comment: "WIDTH OF PACKAGE",
    },
    LENGTH_PACKAGE: {
      type: Sequelize.STRING(60),
      allowNull: false,
      defaultValue: " ",
      comment: "LENGTH OF PACKAGE",
    },
    WEIGHT_PACKAGE: {
      type: Sequelize.STRING(60),
      allowNull: false,
      defaultValue: " ",
      comment: "WEIGHT OF PACKAGE",
    },
    PRICE_PACKAGE: {
      type: Sequelize.STRING(60),
      allowNull: false,
      defaultValue: " ",
      comment: "PRICE OF PACKAGE",
    },
    PAYMENT_CANCELLED: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "PRICE OF PACKAGE",
    },
    VOL_PACKAGE: {
      type: Sequelize.STRING(60),
      allowNull: false,
      defaultValue: " ",
      comment: "VOLUME FO PACKAGE",
    },
    IND_PACKAGE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF PACKAGE",
    },
    USR_ADD: {
      type: Sequelize.STRING(30),
      comment: "USER THAT ADDED THIS ROW	",
    },
    USR_UPD: {
      type: Sequelize.STRING(30),
      comment: "USER WHO MODIFIED THIS ROW	",
    },
    DAT_ADD_PACKAGE: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_PACKAGE: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

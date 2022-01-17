import { Sequelize } from "sequelize";
import db from "../config/database";

 export const BO_CATPACKAGE = db.define(
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
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "NAME OF THE PACKAGE CATEGORY",
    },
    DES_CATPACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "DESCRIPTION OF THE PACKAGE CATEGORY",
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


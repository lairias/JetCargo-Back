import { Sequelize } from "sequelize";
import db from "../config/database";

export const SM_messages = db.define(
  "SM_messages",
  {
    COD_messages: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PACKAGE CATEGORY ",
    },
    COD_PHONE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "NAME OF THE PACKAGE CATEGORY",
    },
    DES_BODY: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: "DESCRIPTION OF THE PACKAGE CATEGORY",
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

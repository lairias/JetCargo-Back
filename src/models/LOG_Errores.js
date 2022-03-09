import { Sequelize } from "sequelize";
import db from "../config/database";

export const LOG_ERROR = db.define(
  "LOG_Error",
  {
    COD_ERROR: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE ERROR",
    },
    DES_ERROR: {
      type: Sequelize.TEXT,
      allowNull: false,
      comment: "DESCRIPTION OF ERROR",
    },
    HTTP_ERROR: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "METHODO OF HTTP",
    },
    STATUS_ERROR: {
      type: Sequelize.TEXT,
      allowNull: false,
      comment: "STATUS OF ERROR",
    },
    DAT_ADD_ERROR: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

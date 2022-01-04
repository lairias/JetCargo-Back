import { Sequelize } from "sequelize";
import db from "../config/database";

export const USERS = db.define(
  "users",
  {
    COD_USER: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "THE PRIMARY KEY OF THE USER",
    },

    EMAIL: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
      comment: "THE EMAIL OF THE USER",
    },
    EMAIL_VERIFIED: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "THE EMAIL OF THE USER",
    },
    PAS_USER: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
      comment: "THE EMAIL OF THE USER",
    },
    API_TOKEN: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: "TOKEN DE ACCESO",
    },
    IND_USR: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "IND OF THE USER TO ACCESS THE SYSTEM, 0=INACTIVE 1=ACTIVE",
    },
    IND_INS: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "IND OF THE FIRST TIME IN THE SYSTEM.",
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

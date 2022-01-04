import { Sequelize } from "sequelize";
import db from "../config/database";

export const PA_STATES = db.define(
  "PA_state",
  {
    COD_STATE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE CITY",
    },
    NAME_STATE: {
      type: Sequelize.STRING(100),
      allowNull: false,
      comment: "NAME OF THE STATE",
    },
    DES_STATE: {
      type: Sequelize.STRING(1000),
      allowNull: false,
      comment: "DESCRIPTION OF THE STATE",
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

import { Sequelize } from "sequelize";
import db from "../config/database";

export const PA_EMAIL = db.define(
  "PA_EMAIL",
  {
    COD_EMAIL: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE EMAIL",
    },
    USEREMAIL: {
      type: Sequelize.STRING(200),
      allowNull: false,
      comment: "USER OF THE EMAIL ADDRESS",
    },
    TYP_EMAIL: {
      type: Sequelize.ENUM("P", "O"),
      allowNull: false,
      comment: "P:personal O:office",
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
      defaultValue: Sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

import { Sequelize } from "sequelize";
import db from "../../config/database";

export const REL_PEOPLE_EMAIL = db.define(
  "REL_PEOPLE_EMAIL",
  {
    COD_REL_PEOEMAIL: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "RELATIONSHIP BETWEEN PEOPLE AND EMAILS",
    },

    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

import { Sequelize } from "sequelize";
import db from "../config/database";

const BO_TRACKING = db.define(
  "BO_Tracking",
  {
    COD_TRACKING: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE TRACKING",
    },

    COD_PACKAGE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PACKAGE",
    },
    DES_TRACKING:{
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "DESCRICTION  OF TRACKING",
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

export default BO_TRACKING;

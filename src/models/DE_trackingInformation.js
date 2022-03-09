import { Sequelize } from "sequelize";
import db from "../config/database";

export const DE_TRACKING_INFORMATION = db.define(
  "DE_trackingInformation",
  {
    COD_TRACKINFORMATION: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE DELIVERY SERVICE",
    },
    COD_DESTINATION_COUNTRY: {
        type: Sequelize.BIGINT,
      allowNull: false,
    },
    COD_ORGIGIN_COUNTRY: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    COD_DESTINATION_CITY: {
        type: Sequelize.BIGINT,
      allowNull: false,
    },
    COD_ORGIGIN_CITY: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    CHECKPOINT_DELIVERY_STATUS: {
      type: Sequelize.ENUM("PENDING", "DELIVERED", "FAILED"),
    },
    SERVICE_URL: {
      type: Sequelize.STRING(255),
    },
    SERVICE_LOGO: {
      type: Sequelize.STRING(255),
    },
    DAT_ADD_TRACKINFORMATION: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        comment: "DATE THAT THIS ROW WERE ADDED	",
      },
    DAT_UPD_TRACKINFORMATION: {
        type: Sequelize.DATE,
        comment: "DATE THIS ROW WAS MODIFIED	",
      },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

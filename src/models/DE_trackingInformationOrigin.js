const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const DE_TRACKING_INFORMATION_ORIGEN = db.define(
  "DE_TrackingOrigen",
  {
    COD_TRACKINFORMATION_ORIGIN: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE DELIVERY SERVICE",
    },
    COD_ORDEN: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE ORDER",
    },
   
    COD_ORIGIN_COUNTRY: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE ORIGIN COUNTRY",
    },
   
    COD_ORIGIN_STATE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE ORIGIN STATE",
    },
   
    COD_ORIGIN_CITY: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE ORIGIN CITY",
    },

    CHECKPOINT_DELIVERY_STATUS: {
      type: Sequelize.ENUM("PENDING", "DELIVERED", "FAILED"),
      defaultValue: "PENDING",
      allowNull: false,
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

module.exports = DE_TRACKING_INFORMATION_ORIGEN
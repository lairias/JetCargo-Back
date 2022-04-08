const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const DE_TRACKING_INFORMATION_DESTINO = db.define(
  "DE_TrackingDestino",
  {
    COD_TRACKINFORMATION_DESTINO: {
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
    COD_DESTINATION_COUNTRY: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE DESTINATION COUNTRY",
    },
   
    COD_DESTINATION_STATE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE DESTINATION STATE ",
    },
 
    COD_DESTINATION_CITY: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE DESTINATION CITY ",
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

module.exports = DE_TRACKING_INFORMATION_DESTINO
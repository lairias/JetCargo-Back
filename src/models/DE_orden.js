const Sequelize = require('sequelize');
const db = require("../config/database");

 const DE_ORDEN = db.define(
  "DE_Ordenes",
  {
    COD_ORDEN: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE LOCKER",
    },
    COD_TRACKING: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PEOPLE",
    },
    NUM_ORDEN: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "COD OF THE PEOPLE",
    },
    CHECKPOINT_STATUS: {
      type: Sequelize.ENUM("PENDING", "IN_PROGRESS", "COMPLETED"),
      allowNull: false,
      defaultValue: "PENDING",
      comment: "COD OF THE PEOPLE",
    },
    IND_ORDEN: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF ORDEN",
    },
    ARCHIVED: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "COD OF THE PEOPLE",
    },
    DAT_ADD_ORDEN: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_ORDEN: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
 module.exports =DE_ORDEN
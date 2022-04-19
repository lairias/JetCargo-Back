const {Sequelize} = require("sequelize")
const db = require("../config/database");

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
    
    DES_TRACKING: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: "DESCRICTION  OF TRACKING",
    },
    NUM_TRACKING: {
      type: Sequelize.STRING(255),
      allowNull: false,
      comment: "NUMBER OF TRACKING",
    },
    RECEIVED_TRACKING: {
      type: Sequelize.ENUM(
        "PENDING",
        "RECEIVED",
        "DELIVERED",
        "CANCELED",
        "IN_PROGRESS"
      ),
      defaultValue: "PENDING",
      allowNull: false,
    },
    IND_TRACKING: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF COUNTRY",
    },
    DAT_ADD_TRACKING: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_TRACKING: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = BO_TRACKING
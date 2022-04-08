const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const REL_PACKAGE_LOKER = db.define(
  "REL_package_locker",
  {
    COD_REL_PACKAGELOCKER: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "RELATIONSHIP BETWEEN PACKAGE AND LOCAKERS",
    },
    COD_LOCKER: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE LOCKER",
    },
    COD_PACKAGE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PACKAGE",
    },
    COD_CUSTOMER: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF TYPE OF CUTOMER",
    },
    COD_TRACKING: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF TYPE OF TRACKING",
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

module.exports = REL_PACKAGE_LOKER;
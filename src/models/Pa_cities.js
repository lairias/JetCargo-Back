const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const PA_CITIES = db.define(
  "PA_City",
  {
    COD_CITY: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE CITY",
    },
    COD_STATE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE STATE",
    },
    NAM_CITY: {
      type: Sequelize.STRING(100),
      allowNull: false,
      comment: "NAME OF THE CITY",
    },
    ZIP_CODE: {
      type: Sequelize.INTEGER(32),
      allowNull: false,
      comment: "ZIP CODE OF THE CITY",
    },
    POS_CODE: {
      type: Sequelize.INTEGER(32),
      comment: "POSTAL CODE OF THE CITY",
    },
    POPULATION: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "POPULATION OF THE CITY",
    },
    CURRENCY: {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: "CURRENCY OF THE CITY",
    },
    IND_CITY: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF COUNTRY",
    },
    TIMEZONE: {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: "TIMEZONE OF THE CITY",
    },
    LATITUDE: {
      type: Sequelize.STRING(20),
      comment: "LATITUDE OF THE CITY",
    },
    LONGITUDE: {
      type: Sequelize.STRING(20),
      comment: "LONGITUDE OF THE CITY",
    },
    DES_CITY: {
      type: Sequelize.STRING(2000),
      allowNull: false,
      comment: "DESCRIPTION OF THE CITY",
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

module.exports = PA_CITIES
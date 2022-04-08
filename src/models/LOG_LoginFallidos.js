const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const LOGINFALLIDOS = db.define(
  "LOG_LoginFallidos",
  {
    COD_LOGINFALLIDOS: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE ERROR",
    },
    COD_USER: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "DESCRIPTION OF ERROR",
    },
    COUNT_ERROR: {
      type: Sequelize.STRING(2000),
      allowNull: false,
      comment: "CURRENT ERROR COUNT",
    },
    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = LOGINFALLIDOS
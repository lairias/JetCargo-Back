const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const DE_SERVICE = db.define(
  "DE_service",
  {
    COD_SERVICE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE DELIVERY SERVICE",
    },

    SERVICE_NAME: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    SERVICE_CODE: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    SERVICE_PHONE: {
      type: Sequelize.STRING(120),
    },
    SERVICE_URL: {
      type: Sequelize.STRING(255),
    },
    SERVICE_LOGO: {
      type: Sequelize.STRING(255),
    },
    IND_SERVICE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF COUNTRY",
    },
    DAT_ADD_SERVICE: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_SERVICE: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
module.exports =DE_SERVICE

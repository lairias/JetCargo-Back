const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const PA_STATES = db.define(
  "PA_State",
  {
    COD_STATE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE CITY",
    },
    COD_COUNTRY: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE COUNTRY",
    },
    NAM_STATE: {
      type: Sequelize.STRING(100),
      allowNull: false,
      comment: "NAME OF THE STATE",
    },
    DES_STATE: {
      type: Sequelize.STRING(1000),
      allowNull: false,
      comment: "DESCRIPTION OF THE STATE",
    },
    IND_STATE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF COUNTRY",
    },
    AREA_STATE: {
      type: Sequelize.STRING(40),
      comment: "AREA OF THE STATE",
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
module.exports =PA_STATES
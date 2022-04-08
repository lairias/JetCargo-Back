const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const USERS = db.define(
  "users",
  {
    COD_USER: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "THE PRIMARY KEY OF THE USER",
    },
    COD_PEOPLE: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PERSON",
    },

    PROFILE_PHOTO_PATH: {
      type: Sequelize.STRING(250),
      comment: " PROFILE PHOTO PATH",
    },
    EMAIL: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
      comment: "THE EMAIL OF THE USER",
    },
    EMAIL_VERIFIED: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "THE EMAIL OF THE USER",
    },
    PAS_USER: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
      comment: "THE EMAIL OF THE USER",
    },
    API_TOKEN: {
      type: Sequelize.STRING(255),

      comment: "TOKEN DE ACCESO",
    },
    IND_USR: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "IND OF THE USER TO ACCESS THE SYSTEM, 0=INACTIVE 1=ACTIVE",
    },
    IND_INS: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "IND OF THE FIRST TIME IN THE SYSTEM.",
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
module.exports =USERS
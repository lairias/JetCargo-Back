const {Sequelize} = require("sequelize")
const db = require("../config/database");

 const PA_POEPLE = db.define(
  "PA_People",
  {
    COD_PEOPLE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PERSON",
    },
    ID: {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "THE ID OF THE PERSON, IT COULD THE PASSPORT OR NATIONAL ID",
    },
    TIP_DOCUMENT: {
      type: Sequelize.ENUM("ID", "PASSPORT", "LICENSE"),
      allowNull: false,
      comment: "THE TYPE OF DOCUMENTATION OF THE PERSON",
    },
    FRISTNAME: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "THE FIRTS NAME OF A PERSON",
    },
    MIDDLENAME: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "THE MIDDLE NAME OF A PERSON",
    },
    LASTNAME: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "THE LAST NAME OF A PERSON",
    },
    AGE: {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: "THE AGE OF A PERSON",
    },
    DAT_BIRTH: {
      type: Sequelize.DATE,
      allowNull: false,
      comment: "DATE OF BIRTH",
    },
    TIP_PERSON: {
      type: Sequelize.ENUM("N", "J"),
      allowNull: false,
      comment: "THE AGE OF A PERSON",
    },
    USR_ADD: {
      type: Sequelize.STRING(30),
      allowNull: false,
      comment: "USER THAT ADDED THIS ROW	",
    },
    IND_PEOPLE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF PEOPLE",
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
module.exports =PA_POEPLE
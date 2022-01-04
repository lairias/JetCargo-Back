import { Sequelize } from "sequelize";
import db from "../config/database";

export const PA_CUSTOMES = db.define(
  "PA_TYPCUSTOMERS",
  {
    COD_TYPCUST: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "THE PRIMARY KEY OF THE TYPE OF CUSTOMERS",
    },
    NOM_TYPCUST: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "THE ID OF THE PERSON, IT COULD THE PASSPORT OR NATIONAL ID",
    },
    DES_TYPCUST: {
      type: Sequelize.ENUM("ID", "PASSPORT", "LICENSE"),
      allowNull: false,
      comment: "DESCRIPTION OF THE TYPE OF CUSTOMER",
    },
    IND_TYPCUST: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "IND OF THE TYPE OF CUSTOMER",
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

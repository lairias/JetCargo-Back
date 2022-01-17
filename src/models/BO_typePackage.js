import { Sequelize } from "sequelize";
import db from "../config/database/index";

export const BO_TYPEPACKAGE = db.define(
  "BO_TypePackage",
  {
    COD_TYPEPACKAGE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE TYPE OF PACKAGE",
    },
    NAM_TYPEPACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "NAME OF THE TYPE OF PACKAGE",
    },
    DES_TYPEPACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "VALIDACION DE TOKEN PARA RESETEO",
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

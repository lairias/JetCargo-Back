import { Sequelize } from "sequelize";
import db from "../../config/database";

export const SE_PERMISOS = db.define(
  "SE_Permisos",
  {
    COD_PERMISO: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PERMISOS",
    },
    NAM_PERMISOS: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
      comment: "NAME OF PERMISSIONS",
    },
    DES_PERMISOS: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "DESCRIPTION OF PERMISSO",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

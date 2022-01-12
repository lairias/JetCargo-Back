import { Sequelize } from "sequelize";
import db from "../../config/database";

export const SE_PERMISOS = db.define(
  "SE_permisos",
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
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

import { Sequelize } from "sequelize";
import db from "../../config/database";

export const SE_PERMISOS = db.define(
  "SE_permisos",
  {
    COD_PERMISOS: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE PERMISOS",
    },
    NAM_PERMISOS: {
      type: Sequelize.BIGINT,
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

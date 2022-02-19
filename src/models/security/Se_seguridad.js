import { Sequelize } from "sequelize";
import db from "../../config/database";

export const SE_SEGURIDAD = db.define(
  "SE_Seguridad",
  {
    COD_SEGURIDAD: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE SEGURIDAD",
    },
    NAM_SEGURIDAD: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
      comment: "NAME OF SEGURIDAD",
    },
    DATO_SEGURIDAD: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "DESCRIPTION OF SEGURIDAD",
    },
    DES_SEGURIDAD: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "DESCRIPTION OF SEGURIDAD",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

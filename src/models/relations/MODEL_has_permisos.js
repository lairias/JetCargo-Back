import { Sequelize } from "sequelize";
import db from "../../config/database";

export const MODEL_HAS_PERMISOS = db.define(
  "MOD_has_permisos",
  {
    
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

import { Sequelize } from "sequelize";
import db from "../../config/database";

export const MODEL_TYPEUSER_HAS_PERMISOS = db.define(
  "MOD_typeusers_has_permisos",
  {
      
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

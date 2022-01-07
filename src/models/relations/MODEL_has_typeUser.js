import { Sequelize } from "sequelize";
import db from "../../config/database";

export const MODEL_HAS_ROLES = db.define(
  "MOD_has_typeuser",
  {},
  {
    createdAt: false,
    updatedAt: false,
  }
);

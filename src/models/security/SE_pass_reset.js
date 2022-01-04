import { Sequelize } from "sequelize";
import db from "../../config/database";

export const Se_PASS_RESET = db.define(
  "SE_pass_reset",
  {
    EMAIL: {
      type: Sequelize.STRING(120),
      primaryKey: true,
      allowNull: false,
      comment: "DIRECCION DEL CORREO ELECTRONICO",
    },
    API_TOKEN: {
      type: Sequelize.STRING(250),
      allowNull: false,
      comment: "VALIDACION DE TOKEN PARA RESETEO",
    },
   
    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED",
    },
  
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const REL_ORIGIN_DESTINO = db.define(
  "REL_origin_destino",
  {
    COD_REL_ORIGIN_DESTINO: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "RELATIONSHIP BETWEEN PACKAGE AND LOCAKERS",
    },
    COD_ORDEN: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE LOCKER",
    },
    COD_DESTINO: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE LOCKER",
    },
    COD_ORIGIN: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF THE PACKAGE",
    },

    DAT_ADD: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = REL_ORIGIN_DESTINO;
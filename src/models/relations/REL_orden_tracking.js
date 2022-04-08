const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const REL_ORDEN_TRACKING = db.define(
  "REL_orden_tracking",
  {
    COD_ORDENTRACKING: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF TYPE OF PEOPLE",
    },
    COD_ORDEN: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF TYPE OF USER",
    },
    COD_TRACKING: {
      type: Sequelize.BIGINT,
      allowNull: false,
      comment: "COD OF TYPE OF USER",
    },
    DAT_ADD_ORDENTRACKING: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_ORDENTRACKING: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = REL_ORDEN_TRACKING;
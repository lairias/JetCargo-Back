const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const REL_PEOPLE_PHONE = db.define(
  "REL_people_phone",
  {
    COD_REL_PEOPHO: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "RELATIONSHIP BETWEEN PEOPLE AND PHONES",
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

//**/SET FOREIGN_KEY_CHECKS = OFF */
module.exports = REL_PEOPLE_PHONE;
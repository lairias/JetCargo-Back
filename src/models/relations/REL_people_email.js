const {Sequelize} = require("sequelize")
const db = require("../../config/database");

 const REL_PEOPLE_EMAIL = db.define(
  "REL_people_email",
  {
    COD_REL_PEOEMAIL: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "RELATIONSHIP BETWEEN PEOPLE AND EMAILS",
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

module.exports = REL_PEOPLE_EMAIL;
"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var db = require("../../config/database");

var REL_CUSTOMER_LOKER = db.define("REL_customer_locker", {
  COD_REL_CUSTOMERLOCKER: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "RELATIONSHIP BETWEEN CUSTOMER AND LOCAKERS"
  },
  COD_CUSTOMER: {
    type: Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF TYPE OF CUTOMER"
  },
  COD_LOCKER: {
    type: Sequelize.BIGINT,
    allowNull: false,
    comment: "COD OF THE LOCKER"
  },
  DAT_ADD: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    comment: "DATE THAT THIS ROW WERE ADDED	"
  }
}, {
  createdAt: false,
  updatedAt: false
});
module.exports = REL_CUSTOMER_LOKER;
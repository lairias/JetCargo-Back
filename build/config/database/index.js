"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

module.exports = new Sequelize("jetcargo", "jetcargo", "JetCargo##985.3", {
  host: "142.44.161.115",
  ports: "3306",
  dialect: "mysql",
  poll: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  } // logging: false,

});
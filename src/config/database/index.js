//configuracion de la base de datos
import { Sequelize } from "sequelize";

module.exports = new Sequelize("craftable1", "root", "root", {
  host: "127.0.0.1",
  ports: "3306",
  dialect: "mysql",
  poll: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});



const express =require( "express")
const cors =require( "cors")
const Users =require( "./routes/users.routes.js")
const Auth =require( "./routes/auth.routes.js")
const Roles =require( "./routes/Roles.routes.js")
const Service =require( "./routes/Service.routes.js")
const Tracking =require( "./routes/Tracking.routes.js")
const Cities =require( "./routes/Cities.routes.js")
const State =require( "./routes/States.routes.js")
const Country =require( "./routes/Country.routes.js")
const Customers =require( "./routes/Customers.routes.js")
const CatPackage =require( "./routes/CatPackage.routes.js")
const Lockers =require( "./routes/Lockers.routes.js")
const TypePackage =require( "./routes/TypePackage.routes.js")
const Payment =require( "./routes/payment.routes.js")
const Package =require( "./routes/Package.routes.js")
const PassReset =require( "./routes/PassReset.routes.js")
const People =require( "./routes/People.routes.js")
const Email =require( "./routes/Email.routes.js")
const Permission =require( "./routes/Permission.routes.js")
const Seguridad =require( "./routes/seguridad.routes.js")
const Phone =require( "./routes/Phone.routes.js")
const Message =require( "./routes/Messaje.routes.js")
const Orden =require( "./routes/Orden.routes.js")
const Invoice =require( "./routes/Invoice.routes.js")
const TrackinInformation =require( "./routes/TrackinInformation.routes.js")
const Shopping =require( "./routes/Shopping.routes.js")
const TypeUser =require( "./routes/TypeUsers.routes")
const ShippingCost =require( "./routes/Shippincost.routes")
const Errores =require( "./routes/Errores.routes")

const sequelise =require( "./config/database/index.js")
const { v4: uuidv4 } = require('uuid');
require("./config/database/R_E.js")
const {
  CreateRole,
  CreatePermisos,
  CreatePemisoHasRol,
  CreateContries,
  CreateStates,
  CreateCities,
  CreateSeguri,
  CreateUser,
  CreateCatPackage,
  CreateTypePackage,
  CreateLocker,
  CreateShippinCost,
  CreateService,
} =require( "./config/database/Seeder.js")
// sequelise.sync({ force: true });
CreateRole();
CreatePermisos();
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //----------------
CreatePemisoHasRol();
CreateContries();
CreateLocker();
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //----------------
CreateStates();
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //----------------
CreateCities();
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //----------------
CreateSeguri();
CreateUser();
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //----------------
CreateCatPackage();
CreateTypePackage();
CreateService();
CreateShippinCost()


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/roles", Roles);
app.use("/api/shopping", Shopping);
app.use("/api/orden", Orden);
app.use("/api/service", Service);
app.use("/api/tracking", Tracking);
app.use("/api/phone", Phone);
app.use("/api/users", Users);
app.use("/api/seguridad", Seguridad);
app.use("/api/auth", Auth);
app.use("/api/cities", Cities);
app.use("/api/states", State);
app.use("/api/country", Country);
app.use("/api/customers", Customers);
app.use("/api/catpackage", CatPackage);
app.use("/api/locker", Lockers);
app.use("/api/package", Package);
app.use("/api/typepackage", TypePackage);
app.use("/api/shippingcost", ShippingCost);
app.use("/api/payment", Payment);
app.use("/api/passreset", PassReset);
app.use("/api/email", Email);
app.use("/api/people", People);
app.use("/api/permission", Permission);
app.use("/api/message", Message);
app.use("/api/trackingInformation", TrackinInformation);
app.use("/api/invoice", Invoice);
app.use("/api/typeuser", TypeUser);
app.use("/api/errores", Errores);

module.exports = app;

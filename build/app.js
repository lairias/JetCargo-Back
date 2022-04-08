"use strict";

var poli = require("@babel/polyfill");

var express = require("express");

var morgan = require("morgan");

var cors = require("cors");

var multer = require("multer");

var path = require("path");

var Users = require("./routes/users.routes.js");

var Auth = require("./routes/auth.routes.js");

var Roles = require("./routes/Roles.routes.js");

var Service = require("./routes/Service.routes.js");

var Tracking = require("./routes/Tracking.routes.js");

var Cities = require("./routes/Cities.routes.js");

var State = require("./routes/States.routes.js");

var Country = require("./routes/Country.routes.js");

var Customers = require("./routes/Customers.routes.js");

var CatPackage = require("./routes/CatPackage.routes.js");

var Lockers = require("./routes/Lockers.routes.js");

var TypePackage = require("./routes/TypePackage.routes.js");

var Payment = require("./routes/payment.routes.js");

var Package = require("./routes/Package.routes.js");

var PassReset = require("./routes/PassReset.routes.js");

var People = require("./routes/People.routes.js");

var Email = require("./routes/Email.routes.js");

var Permission = require("./routes/Permission.routes.js");

var Seguridad = require("./routes/seguridad.routes.js");

var Phone = require("./routes/Phone.routes.js");

var Message = require("./routes/Messaje.routes.js");

var Orden = require("./routes/Orden.routes.js");

var Invoice = require("./routes/Invoice.routes.js");

var TrackinInformation = require("./routes/TrackinInformation.routes.js");

var sequelise = require("./config/database/index.js");

var _require = require('uuid'),
    uuidv4 = _require.v4;

require("./config/database/R_E.js");

var _require2 = require("./config/database/Seeder.js"),
    CreateRole = _require2.CreateRole,
    CreatePermisos = _require2.CreatePermisos,
    CreatePemisoHasRol = _require2.CreatePemisoHasRol,
    CreateContries = _require2.CreateContries,
    CreateStates = _require2.CreateStates,
    CreateCities = _require2.CreateCities,
    CreateSeguri = _require2.CreateSeguri,
    CreateUser = _require2.CreateUser,
    CreateCatPackage = _require2.CreateCatPackage,
    CreateTypePackage = _require2.CreateTypePackage,
    CreateLocker = _require2.CreateLocker,
    CreateService = _require2.CreateService; // sequelise.sync({ force: true });


CreateRole();
CreatePermisos(); // // // // // // // // // // // // // // // // // // // // // // // // // // //----------------

CreatePemisoHasRol();
CreateContries(); // // // // // // // // // // // // // // // // // // // // // // //----------------

CreateStates(); // // // // // // // // // // // // // // // // // // // // // //----------------

CreateCities(); // // // // // // // // // // // // // // // // // // // //----------------

CreateSeguri();
CreateUser(); // // // // // // // // // // // // // // // // // // //----------------

CreateCatPackage();
CreateTypePackage();
CreateLocker();
CreateService();
var storage = multer.diskStorage({
  destination: path.join(__dirname, "public/upload/img"),
  filename: function filename(req, file, cb) {
    cb(null, "JetCargo_IMG" + "-" + uuidv4() + path.extname(file.originalname));
  }
});
var app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(multer(storage).single("path_image"));
app.use("/api/roles", Roles);
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
app.use("/api/payment", Payment);
app.use("/api/passreset", PassReset);
app.use("/api/email", Email);
app.use("/api/people", People);
app.use("/api/permission", Permission);
app.use("/api/message", Message);
app.use("/api/trackingInformation", TrackinInformation);
app.use("/api/invoice", Invoice);
module.exports = app;
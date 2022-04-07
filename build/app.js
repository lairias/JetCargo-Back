"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _Roles = _interopRequireDefault(require("./routes/Roles.routes"));

var _Service = _interopRequireDefault(require("./routes/Service.routes"));

var _Tracking = _interopRequireDefault(require("./routes/Tracking.routes"));

var _Cities = _interopRequireDefault(require("./routes/Cities.routes"));

var _States = _interopRequireDefault(require("./routes/States.routes"));

var _Country = _interopRequireDefault(require("./routes/Country.routes"));

var _Customers = _interopRequireDefault(require("./routes/Customers.routes"));

var _CatPackage = _interopRequireDefault(require("./routes/CatPackage.routes"));

var _Lockers = _interopRequireDefault(require("./routes/Lockers.routes"));

var _TypePackage = _interopRequireDefault(require("./routes/TypePackage.routes"));

var _payment = _interopRequireDefault(require("./routes/payment.routes"));

var _Package = _interopRequireDefault(require("./routes/Package.routes"));

var _PassReset = _interopRequireDefault(require("./routes/PassReset.routes"));

var _People = _interopRequireDefault(require("./routes/People.routes"));

var _Email = _interopRequireDefault(require("./routes/Email.routes"));

var _Permission = _interopRequireDefault(require("./routes/Permission.routes"));

var _seguridad = _interopRequireDefault(require("./routes/seguridad.routes"));

var _Phone = _interopRequireDefault(require("./routes/Phone.routes"));

var _Messaje = _interopRequireDefault(require("./routes/Messaje.routes"));

var _Orden = _interopRequireDefault(require("./routes/Orden.routes"));

var _Invoice = _interopRequireDefault(require("./routes/Invoice.routes"));

var _TrackinInformation = _interopRequireDefault(require("./routes/TrackinInformation.routes"));

var _index = _interopRequireDefault(require("./config/database/index"));

var _uuid = require("uuid");

require("./config/database/R_E");

var _Seeder = require("./config/database/Seeder");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// sequelise.sync({ force: true });
(0, _Seeder.CreateRole)();
(0, _Seeder.CreatePermisos)(); // // // // // // // // // // // // // // // // // // // // // // // // // // //----------------

(0, _Seeder.CreatePemisoHasRol)();
(0, _Seeder.CreateContries)(); // // // // // // // // // // // // // // // // // // // // // // //----------------

(0, _Seeder.CreateStates)(); // // // // // // // // // // // // // // // // // // // // // //----------------

(0, _Seeder.CreateCities)(); // // // // // // // // // // // // // // // // // // // //----------------

(0, _Seeder.CreateSeguri)();
(0, _Seeder.CreateUser)(); // // // // // // // // // // // // // // // // // // //----------------

(0, _Seeder.CreateCatPackage)();
(0, _Seeder.CreateTypePackage)();
(0, _Seeder.CreateLocker)();
(0, _Seeder.CreateService)();

var storage = _multer["default"].diskStorage({
  destination: _path["default"].join(__dirname, "public/upload/img"),
  filename: function filename(req, file, cb) {
    cb(null, "JetCargo_IMG" + "-" + (0, _uuid.v4)() + _path["default"].extname(file.originalname));
  }
});

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use((0, _multer["default"])(storage).single("path_image"));
app.use("/api/roles", _Roles["default"]);
app.use("/api/orden", _Orden["default"]);
app.use("/api/service", _Service["default"]);
app.use("/api/tracking", _Tracking["default"]);
app.use("/api/phone", _Phone["default"]);
app.use("/api/users", _users["default"]);
app.use("/api/seguridad", _seguridad["default"]);
app.use("/api/auth", _auth["default"]);
app.use("/api/cities", _Cities["default"]);
app.use("/api/states", _States["default"]);
app.use("/api/country", _Country["default"]);
app.use("/api/customers", _Customers["default"]);
app.use("/api/catpackage", _CatPackage["default"]);
app.use("/api/locker", _Lockers["default"]);
app.use("/api/package", _Package["default"]);
app.use("/api/typepackage", _TypePackage["default"]);
app.use("/api/payment", _payment["default"]);
app.use("/api/passreset", _PassReset["default"]);
app.use("/api/email", _Email["default"]);
app.use("/api/people", _People["default"]);
app.use("/api/permission", _Permission["default"]);
app.use("/api/message", _Messaje["default"]);
app.use("/api/trackingInformation", _TrackinInformation["default"]);
app.use("/api/invoice", _Invoice["default"]);
var _default = app;
exports["default"] = _default;
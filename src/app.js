import "@babel/polyfill";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";
import path from "path";
import Users from "./routes/users.routes";
import Auth from "./routes/auth.routes";
import Roles from "./routes/Roles.routes";
import Service from "./routes/Service.routes";
import Tracking from "./routes/Tracking.routes";
import Cities from "./routes/Cities.routes";
import State from "./routes/States.routes";
import Country from "./routes/Country.routes";
import Customers from "./routes/Customers.routes";
import CatPackage from "./routes/CatPackage.routes";
import Lockers from "./routes/Lockers.routes";
import TypePackage from "./routes/TypePackage.routes";
import Payment from "./routes/payment.routes";
import Package from "./routes/Package.routes";
import PassReset from "./routes/PassReset.routes";
import People from "./routes/People.routes";
import Email from "./routes/Email.routes";
import Permission from "./routes/Permission.routes";
import Seguridad from "./routes/seguridad.routes";
import sequelise from "./config/database/index";
import { v4 as uuidv4 } from 'uuid';
import "./config/database/R_E";
import {
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
  CreateService
} from "./config/database/Seeder";
// sequelise.sync({ force: true });
CreateRole();
CreatePermisos();
// // //----------------
CreatePemisoHasRol();
CreateContries();
// // //----------------
CreateStates();
// // //----------------
CreateCities();
// // //----------------
CreateSeguri();
CreateUser();
// // //----------------
CreateCatPackage();
CreateTypePackage();
CreateLocker();
CreateService();

const storage = multer.diskStorage({destination: path.join(__dirname, "public/upload/img"),
  filename: (req, file, cb) => {
    cb(null, "JetCargo_IMG"+"-" + uuidv4() + path.extname(file.originalname));
  }
});
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(multer(storage).single("path_image"));
app.use("/api/roles", Roles);
app.use("/api/service", Service);
app.use("/api/tracking", Tracking);
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

export default app;

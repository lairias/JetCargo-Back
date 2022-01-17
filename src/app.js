//**Importaciones del sistema del server */
import express from "express";
import morgan from "morgan";
import cors from "cors";
//**Importaciones de las rutas del server */
import Users from "./routes/users.routes";
import Auth from "./routes/auth.routes";
import Roles from "./routes/Roles.routes";
import Cities from "./routes/Cities.routes";
import State from "./routes/States.routes";
import Country from "./routes/Country.routes";
//**Importaciones de Seeder*/
import sequelise from "./config/database/index";

import "./config/database/R_E";
import {
  CreateRole,
  CreatePermisos,
  CreatePemisoHasRol,
  CreateContries,
  CreateStates,
  CreateCities,
} from "./config/database/Seeder";
// sequelise.sync({ force: true, alter : true });

CreateRole();
CreatePermisos();
CreatePemisoHasRol();

CreateContries();
CreateStates();
CreateCities();

// **Ajustes*/
const app = express();
app.use(cors());
//**Middleware*/
app.use(morgan("dev"));
app.use(express.json());

//**Rutas */
app.use("/api/roles", Roles);
app.use("/api/users", Users);
app.use("/api/auth", Auth);
app.use("/api/cities", Cities);
app.use("/api/states", State);
app.use("/api/country", Country);

export default app;

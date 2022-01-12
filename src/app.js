import express from "express";
import morgan from "morgan";
import Users from "./routes/users.routes";
import Auth from "./routes/auth.routes";
import Roles  from "./routes/Roles.routes";
import cors from "cors"
import sequelise from "./config/database/index"
import "./config/database/R_E";

import {
  CreateRole,
  CreatePermisos,
  CreatePemisoHasRol,CreateContries,CreateStates,CreateCities
} from "./config/database/Seeder";

// import sequelise from "./config/database";

sequelise.sync({ force: true });
// CreateRole()
// CreatePermisos();
// CreatePemisoHasRol()
// CreateContries()
// CreateStates()
// CreateCities()

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "Welcome" });
});

app.use("/api/roles", Roles);
app.use("/api/users", Users);
app.use("/api/auth", Auth);

export default app;

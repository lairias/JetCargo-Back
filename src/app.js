import express from "express";
import morgan from "morgan";

import Users from "./routes/users.routes";
import Auth from "./routes/auth.routes";
import cors from "cors"

<<<<<<< HEAD
import sequelise from "./config/database";
import "./config/database/R_E";
import {
  CreateRole,
  CreatePermisos,
  CreatePemisoHasRol,
} from "./config/database/Seeder";
=======
// import sequelise from "./config/database";
// import "./config/database/R_E";
// sequelise.sync({ force: true });
>>>>>>> cbb6b3c35f64cc27fc2b6132d2d5ec8169b737a4

  CreateRole()
  CreatePermisos();
  CreatePemisoHasRol()

  // sequelise.sync({ force: true });
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "Welcome" });
});

app.use("/api/users", Users);
app.use("/api/auth", Auth);

export default app;

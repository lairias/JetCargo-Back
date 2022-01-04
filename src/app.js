import express from "express";
import morgan from 'morgan';

import pro from "./routes/products.routes";
import AUTH from "./routes/auth.routes";


import sequelise from './config/database'
// import  "./config/database/R_E"
sequelise.sync()

const app = express();
app.use(morgan('dev'));
app.use(express.json())

 app.get("/", (req, res) => {
  res.json({ mensaje: "Welcome" });
});


app.use("/api/products", pro);
app.use("/api/auth", AUTH);

export default app;
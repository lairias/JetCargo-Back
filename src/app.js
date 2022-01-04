import express from "express";
import morgan from 'morgan';

import PEOPLE from "./routes/products.routes";
import AUTH from "./routes/auth.routes";


import sequelise from './config/database'
import  "./config/database/R_E"
sequelise.sync()

const app = express();
app.use(morgan('dev'));
app.use(express.json())


//lunar-capsule-966886.postman.co/workspace/1a450d8b-b8e5-4f45-a768-167a12acd762/request/10431351-e6380611-fccc-4464-abe1-26fa3adc2d18
https: app.get("/", (req, res) => {
  res.json({ mensaje: "Welcome" });
});


app.use("/products", PEOPLE);
app.use("/api/auth", AUTH);

export default app;
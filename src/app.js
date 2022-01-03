import express from "express";
import morgan from 'morgan';
import PEOPLE from "./routes/products.routes";
import sequelise from './config/database'
import  "./config/database/R_E"
sequelise.sync()
const app = express();
app.use(morgan('dev'));

app.get('/', (req ,res)=>{
    res.json({mensaje:"Welcome"})
})


app.use("/products", PEOPLE);

export default app;
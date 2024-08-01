import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
const categories=require("./Routers/categories")
const order=require("./Routers/order")
const app: Application = express();

var cors = require('cors');
app.use(cors());
app.use(express.json());
require('./connectDB')

app.use('/api/categories',categories)
app.use('/api/order',order)
dotenv.config();

const port = 5000;


app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

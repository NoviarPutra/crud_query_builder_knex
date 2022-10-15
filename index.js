import dotenv from "dotenv";
import express from "express";
import { routers } from "./src/routers/index.js";
dotenv.config();

// INIT
dotenv.config();
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
routers(app);

// LISTENER
app.listen(process.env.PORT, () => {
  console.log(`Server up and running on http://localhost:${process.env.PORT}`);
});

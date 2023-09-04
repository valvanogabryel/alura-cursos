import "dotenv/config";
import express from "express";
import db from "./config/database/connect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

db.on("error", (err) => {
  console.log.bind(
    console,
    `${err}: Não foi possível se conectar com o banco de dados...`
  );
});

db.once("open", () => {
  console.log("Connected to database");
});

export default app;

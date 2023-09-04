import "dotenv/config";
import express from "express";
import db from "./config/database/connect.js";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
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

app.get("/", (_, res) => {
  res.status(200).send({ message: "Curso de NodeJS & Express" });
});

export default app;

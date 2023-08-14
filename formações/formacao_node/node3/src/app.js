import express from "express";
import db from "./config/database/connect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const app = express();
app.use(express.json());
routes(app);

//? page 404
app.use(notFoundHandler);

//? middleware
app.use(errorHandler);

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

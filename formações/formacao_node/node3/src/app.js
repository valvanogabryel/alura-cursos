import express from "express";
import db from "./config/database/connect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
routes(app);

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

// app.put("/books/:id", (req, res) => {
//   const { id } = req.params;

//   const index = getBookById(id);

//   const updatedBook = req.body;

//   books[index].title = updatedBook.title;

//   res.status(200).json(books).send("Livro atualizado com sucesso!");
// });

// app.delete("/books/:id", (req, res) => {
//   const { id } = req.params;
//   const index = getBookById(id);

//   books.splice(index, 1);

//   res.send(`Livro ${id} removido com sucesso`);
// });

// function getBookById(id) {
//   return books.findIndex((book) => book.id == id);
// }

export default app;

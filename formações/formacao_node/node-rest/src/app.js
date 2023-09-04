import "dotenv/config";
import express from "express";
import db from "./config/database/connect.js";
import BooksModel from "./config/database/models/books.model.js";

const app = express();
app.use(express.json());

db.on("error", (err) => {
  console.log.bind(
    console,
    `${err}: Não foi possível se conectar com o banco de dados...`
  );
});

db.once("open", () => {
  console.log("Connected to database");
});

function getBookById(id) {
  return books.find((book) => book.id === Number(id));
}

app.get("/", (_, res) => {
  res.status(200).send({ message: "Curso de NodeJS & Express" });
});

app.get("/books", async (_, res) => {
  const books = await BooksModel.find();

  res.status(200).json(books);
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  const book = await BooksModel.findById(id);

  res.status(200).json(book);
});

app.post("/books", async (req, res) => {
  const newBook = await BooksModel.create(req.body);

  res.status(200).json({
    message: "livro cadastrado com sucesso.",
    data: newBook,
  });
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;

  const book = await BooksModel.findByIdAndUpdate(id, req.body);

  res.status(200).json({ message: "livro atualizado", data: book });
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;

  await BooksModel.findByIdAndDelete(id);

  res.status(200).send("Livro deletado com sucesso!");
});

export default app;

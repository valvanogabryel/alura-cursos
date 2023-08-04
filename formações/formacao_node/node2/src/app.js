import express from "express";
import db from "./config/database/connect.js";
import BooksModel from "./config/database/models/book.model.js";

const app = express();

db.on(
  "error",
  console.log.bind(
    console,
    "Não foi possível se conectar com o banco de dados..."
  )
);

db.once("open", () => {
  console.log("Connected to database");
});

app.use(express.json());

// const books = [
//   {
//     id: 1,
//     title: "Harry Potter",
//   },
//   {
//     id: 2,
//     title: "The Dark Tower",
//   },
//   {
//     id: 3,
//     title: "The Lord of the Rings",
//   },
//   {
//     id: 4,
//     title: "The Shining",
//   },
// ];

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Curso de Node");
});

app.get("/books", async (req, res) => {
  try {
    const books = await BooksModel.find();
    res.status(200).contentType("application/json").json(books);
  } catch (err) {
    res.status(500).send(error.message);
  }
  // res.status(200).contentType("application/json").send(books);
});

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  if (req.errored) {
    return res.status(400).send("Erro ao cadastrar livro!");
  }
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;

  const index = getBookById(id);

  const updatedBook = req.body;

  books[index].title = updatedBook.title;

  res.status(200).json(books).send("Livro atualizado com sucesso!");
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = getBookById(id);

  books.splice(index, 1);

  res.send(`Livro ${id} removido com sucesso`);
});

function getBookById(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;

import express from "express";

const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: "Lord of the Rings",
    author: "JRR Tolkien",
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "JRR Tolkien",
  },
];

function getBookById(id) {
  return books.find((book) => book.id === Number(id));
}

app.get("/", (_, res) => {
  res.status(200).send({ message: "Curso de NodeJS & Express" });
});

app.get("/livros", (_, res) => {
  res.status(200).send(books);
});

app.get("/livros/:id", (req, res) => {
  const { id } = req.params;

  const book = getBookById(id);

  res.status(200).send(book);
});

app.post("/livros", (req, res) => {
  books.push(req.body);
  res.status(201).send("livro cadastrado com sucesso.");
});

app.put("/livros/:id", (req, res) => {
  const { id } = req.params;

  const book = getBookById(id);

  book.title = req.body.title;

  res.status(200).json(book);
});

app.delete("/livros/:id", (req, res) => {
  const { id } = req.params;

  const book = getBookById(id);
  const index = books.indexOf(book);

  books.splice(index, 1);

  res.status(200).send("Livro excluído com sucesso");
});

export default app;

import express from "express";

const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    title: "Harry Potter",
  },
  {
    id: 2,
    title: "The Dark Tower",
  },
  {
    id: 3,
    title: "The Lord of the Rings",
  },
  {
    id: 4,
    title: "The Shining",
  },
];

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Curso de Node");
});

app.get("/books", (req, res) => {
  res.status(200).contentType("application/json").send(books);
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

  const index = books.findIndex((book) => book.id == id);

  const updatedBook = req.body;

  books[index].title = updatedBook.title;

  res.status(200).json(books).send("Livro atualizado com sucesso!");
});

export default app;

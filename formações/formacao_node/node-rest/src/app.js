import express from "express";
import { uuid } from "uuidv4";

const app = express();
app.use(express.json());

const books = [
  {
    id: uuid(),
    title: "Lord of the Rings",
    author: "JRR Tolkien",
  },
  {
    id: uuid(),
    title: "The Hobbit",
    author: "JRR Tolkien",
  },
];

app.get("/", (_, res) => {
  res.status(200).send({ message: "oioioi" });
});

app.get("/", (_, res) => {
  res.status(200).send({ message: "oioioi" });
});

export default app;

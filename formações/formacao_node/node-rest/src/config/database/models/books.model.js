import mongoose, { Schema, model } from "mongoose";

const BooksSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: String,
      required: [true, "O campo de título deve ser obrigatório"],
    },
    author: {
      type: String,
      required: [true, "O livro precisa de um autor"],
    },
    publisher: {
      type: String,
      required: [true, "O campo de editora deve ser obrigatório"],
    },
    price: {
      type: Number,
    },
    pages: {
      type: Number,
      required: [true, "O campo de páginas deve ser obrigatório"],
      min: [10, "O livro pode conter no mínimo 10 páginas. {VALUE}"],
      max: [2000, "O livro pode conter no máximo 2000 páginas. {VALUE}"],
    },
  },
  {
    versionKey: false,
  }
);

const BooksModel = model("books", BooksSchema);

export default BooksModel;

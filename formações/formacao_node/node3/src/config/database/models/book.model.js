import mongoose from "mongoose";

const { Schema, model } = mongoose;

const booksSchema = new Schema({
  title: {
    type: String,
    required: [true, "O título do livro é obrigatório"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authors",
    required: [true, "O(a) autor(a) é obrigatório(a)"],
  },
  pages: {
    type: Number,
    required: [true, "O número de páginas é obrigatório"],
    min: [
      10,
      "O número de páginas deve ser maior que 10. Valor fornecido: {VALUE}",
    ],
    max: [
      2000,
      "O número de páginas deve ser menor que 2000. Valor fornecido: {VALUE}",
    ],
    //! forma alternativa
    // validate: {
    //   validator: (value) => {
    //     return value >= 10 && value <= 2000;
    //   },
    //   message:
    //     "O número de páginas deve estar entre 10 e 2000. Valor fornecido: {VALUE}",
    // },
  },
  publishing_company: {
    type: String,
    required: [true, "O nome da editora é obrigatório"],
    // enum: ["Editora A", "Editora B"] somente irá permitir livros dessas duas editoras
  },
});

const BooksModel = model("Books", booksSchema);

export default BooksModel;

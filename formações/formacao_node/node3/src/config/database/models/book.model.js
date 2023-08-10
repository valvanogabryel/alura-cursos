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
  },
  publishing_company: {
    type: String,
    required: [true, "O nome da editora é obrigatório"],
  },
});

const BooksModel = model("Books", booksSchema);

export default BooksModel;

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const booksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authors",
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  publishing_company: {
    type: String,
    required: true,
  },
});

const BooksModel = model("Books", booksSchema);

export default BooksModel;

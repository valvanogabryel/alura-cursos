import BooksModel from "../config/database/models/books.model.js";

export default class BooksController {
  static async getBooks(_, res) {
    const books = await BooksModel.find();
    res.status(200).json(books);
  }

  static async getBookById(req, res) {
    const { id } = req.params;
    const book = await BooksModel.findById(id);
    res.status(200).json(book);
  }

  static async registerBook(req, res) {
    const newBook = await BooksModel.create(req.body);
    res.status(200).json({
      message: "livro cadastrado com sucesso.",
      data: newBook,
    });
  }

  static async updateBook(req, res) {
    const { id } = req.params;
    const book = await BooksModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "livro atualizado", data: book });
  }

  static async deleteBook(req, res) {
    const { id } = req.params;
    await BooksModel.findByIdAndDelete(id);
    res.status(200).send("Livro deletado com sucesso!");
  }
}

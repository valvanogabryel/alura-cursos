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
    try {
      const newBook = await BooksModel.create(req.body);
      res.status(201).json({
        message: "livro cadastrado com sucesso.",
        data: newBook,
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - ocorreu um erro inesperado...`,
      });
    }
  }

  static async updateBook(req, res) {
    try {
      const { id } = req.params;
      await BooksModel.findByIdAndUpdate(id, {
        $set: req.body,
        new: true,
      });
      res.status(200).json({ message: "livro atualizado" });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - ocorreu um erro inesperado...`,
      });
    }
  }

  static async deleteBook(req, res) {
    try {
      const { id } = req.params;
      await BooksModel.findByIdAndDelete(id);
      res.status(200).send("Livro deletado com sucesso!");
    } catch (err) {
      res.status(500).json({
        message: `${err.message} - ocorreu um erro inesperado...`,
      });
    }
  }
}

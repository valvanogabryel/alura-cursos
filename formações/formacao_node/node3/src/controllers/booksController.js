import BooksModel from "../config/database/models/book.model.js";

class BooksController {
  //* GET
  static async listBooks(_, res, next) {
    try {
      const books = await BooksModel.find().populate("author");
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  static async listBookById(req, res, next) {
    const { id } = req.params;

    try {
      const book = await BooksModel.findById(id).populate("author", "name");
      // .populate("author", "name -_id") o nome do autor, mas não o id
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }

  //* POST
  static async registerBook(req, res, next) {
    try {
      const newBook = await BooksModel.create(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      next(error);
    }
  }

  /*//! ||
//   ?  static registerBook(req, res, next) {
//   ?    let book = new BookModel(req.body);
//   ?    book.save(err => { 
//    ?   if (err) {
//     ?      res.status(500).send(`${error}: Não foi possível criar o livro`);
//    ?   } else {
//    ?       res.status(201).json(book.toJSON());
//    ?   }
//   ?  });
// ?}
*/

  //* PUT
  static async updateBook(req, res, next) {
    const { id } = req.params;

    try {
      const updatedBook = await BooksModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedBook);
    } catch (error) {
      next(error);
    }
  }

  //* DELETE
  static async deleteBook(req, res, next) {
    const { id } = req.params;

    try {
      const deletedBook = await BooksModel.findByIdAndRemove(id);
      res.status(200).json(deletedBook);
    } catch (error) {
      next(error);
    }
  }

  static async listBookByPublisher(req, res, next) {
    const { publisher } = req.query;

    try {
      const booksByPublisher = await BooksModel.find({
        publishing_company: publisher,
      }).populate("author", "name -_id");
      res.status(200).json(booksByPublisher);
    } catch (error) {
      next(error);
    }
  }
}

export default BooksController;

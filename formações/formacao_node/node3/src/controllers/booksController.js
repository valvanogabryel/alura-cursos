import { AuthorsModel, BooksModel } from "../config/database/models/index.js";

class BooksController {
  //* GET
  static async listBooks(req, _, next) {
    try {
      const booksResult = BooksModel.find();

      req.result = booksResult;

      next();
    } catch (error) {
      next(error);
    }
  }

  static async listBookById(req, res, next) {
    const { id } = req.params;

    try {
      const book = await BooksModel.findById(id, {}, { autopopulate: false })
        .populate("author", "-_id")
        .exec();
      // // .populate("author", "name -_id") o nome do autor, mas não o id
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }

  static async listBookByFilter(req, res, next) {
    try {
      const query = await processQuery(req.query);

      if (query) {
        const filteredBooks = BooksModel.find(query);

        req.result = filteredBooks;

        next();
      } else {
        res.status(200).send([]);
      }
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
}

async function processQuery(params) {
  const { publisher, queriedTitle, maxPages, minPages, authorName } = params;

  let query = {};

  if (publisher)
    query.publishing_company = {
      $regex: publisher,
      $options: "i",
    };

  if (queriedTitle)
    query.title = {
      $regex: queriedTitle,
      $options: "i",
    };

  if (minPages || maxPages) query.pages = {};

  if (minPages) query.pages.$gte = minPages;
  if (maxPages) query.pages.$lte = maxPages;

  if (authorName) {
    const author = await AuthorsModel.findOne({
      name: authorName,
    });

    if (author) {
      query.author = author._id;
    } else {
      query = null;
    }
  }

  return query;
}

export default BooksController;

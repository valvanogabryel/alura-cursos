import BooksModel from "../config/database/models/book.model.js";

class BooksController {
  //* GET
  static async listBooks(_, res) {
    try {
      const books = await BooksModel.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).send(`${error}: Não foi possível listar os livros`);
    }
  }

  static async listBookById(req, res) {
    const { id } = req.params;

    try {
      const book = await BooksModel.findById(id);
      res.status(200).json(book);
    } catch (error) {
      res
        .status(400)
        .send({ message: `${error}: Não foi possível listar o livro` });
    }
  }

  //* POST
  static async registerBook(req, res) {
    try {
      const newBook = await BooksModel.create(req.body);
      res
        .status(201)
        .json(newBook)
        .send({ message: "Livro cadastrado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error}: Não foi possível criar o livro` });
    }
  }

  /*//! ||
//   ?  static async registerBook(req, res) {
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
  static async updateBook(req, res) {
    const { id } = req.params;

    try {
      const updatedBook = await BooksModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res
        .status(200)
        .json(updatedBook)
        .send({ message: "Livro atualizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error}: Não foi possível atualizar o livro` });
    }
  }

  //* DELETE
  static async deleteBook(req, res) {
    const { id } = req.params;

    try {
      const deletedBook = await BooksModel.findByIdAndRemove(id);
      res
        .status(200)
        .json(deletedBook)
        .send({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error}: Não foi possível deletar o livro` });
    }
  }
}

export default BooksController;

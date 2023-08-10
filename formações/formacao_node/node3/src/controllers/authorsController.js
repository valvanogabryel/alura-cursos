import AuthorsModel from "../config/database/models/author.model.js";

class AuthorsController {
  static listAuthors(_, res) {
    AuthorsModel.find()
      .then((author) => {
        res.status(200).json(author);
      })
      .catch((err) => {
        res.status(500).send({
          message: `[${err.message}]: Ocorreu um erro ao tentar listar os autores...`,
        });
      });
  }

  static listAuthorById(req, res) {
    const { id } = req.params;

    AuthorsModel.findById(id)
      .then((author) => {
        res.status(200).json(author);
      })
      .catch((err) => {
        res.status(500).send({
          message: `[${err.message}]: Ocorreu um erro ao tentar listar o autor desejado...`,
        });
      });
  }

  static async registerAuthor(req, res) {
    try {
      const newAuthor = await AuthorsModel.create(req.body);
      res.status(201).json(newAuthor);
    } catch (err) {
      res.status(500).send({
        message: `[${err.message}]: Ocorreu um erro ao tentar criar o autor...`,
      });
    }
  }

  static async updateAuthor(req, res) {
    const { id } = req.params;

    AuthorsModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
      .then((updatedAuthor) => {
        res.status(200).json(updatedAuthor);
      })
      .catch((err) => {
        res.status(500).send({
          message: `[${err.message}]: Ocorreu um erro ao tentar listar o autor desejado...`,
        });
      });
  }

  static async deleteAuthor(req, res) {
    const { id } = req.params;

    AuthorsModel.findByIdAndRemove(id)
      .then((deletedAuthor) => {
        res.status(200).json(deletedAuthor);
      })
      .catch((err) => {
        res.status(500).send({
          message: `[${err.message}]: Ocorreu um erro ao tentar listar o autor desejado...`,
        });
      });
  }
}

export default AuthorsController;

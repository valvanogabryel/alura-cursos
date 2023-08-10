import AuthorsModel from "../config/database/models/author.model.js";

class AuthorsController {
  static listAuthors(_, res, next) {
    AuthorsModel.find()
      .then((author) => {
        res.status(200).json(author);
      })
      .catch((error) => {
        next(error);
      });
  }

  static async listAuthorById(req, res, next) {
    const { id } = req.params;

    AuthorsModel.findById(id)
      .then((author) => {
        if (!author)
          return res.status(404).send({
            message: "Autor não encontrado",
          });
        res.status(200).json(author);
      })
      .catch((error) => {
        next(error);
      });
  }

  static async registerAuthor(req, res, next) {
    const { name } = req.body;

    try {
      const existingAuthor = await AuthorsModel.findOne({
        name,
      });

      if (existingAuthor)
        throw new Erroror("Já existe um autor com esse nome.");

      const newAuthor = await AuthorsModel.create(req.body);

      res.status(201).json(newAuthor);
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor(req, res, next) {
    const { id } = req.params;

    AuthorsModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
      .then((updatedAuthor) => {
        res.status(200).json(updatedAuthor);
      })
      .catch((error) => {
        next(error);
      });
  }

  static async deleteAuthor(req, res, next) {
    const { id } = req.params;

    AuthorsModel.findByIdAndRemove(id)
      .then((deletedAuthor) => {
        res.status(200).json(deletedAuthor);
      })
      .catch((error) => {
        next(error);
      });
  }
}

export default AuthorsController;

const UsuarioService = require("../services/usuarioService");

const usuarioService = new UsuarioService();

class UsuarioController {
  static async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await usuarioService.register({ name, email, password });

      res.status(201).json(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
}

module.exports = UsuarioController;

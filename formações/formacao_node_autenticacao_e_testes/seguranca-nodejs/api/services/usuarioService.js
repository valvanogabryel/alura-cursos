const database = require("../models");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");

class UsuarioService {
  async register(dto) {
    const user = await database.usuarios.findOne({
      where: {
        email: dto.email,
      },
    });

    if (user) {
      throw new Error("Usuário já cadastrado.");
    }

    try {
      const passwordHash = await hash(dto.password, 8);

      const newUser = await database.usuarios.create({
        id: uuid(),
        name: dto.name,
        email: dto.email,
        password: passwordHash,
      });

      return newUser;
    } catch (err) {
      throw new Error("Erro ao cadastrar usuário");
    }
  }
}

module.exports = UsuarioService;

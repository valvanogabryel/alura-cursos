import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import Usuario from "../models/usuario.js";
import constants from "../config/constants.js";

const requiredKeys = ["nome", "email", "senha"];

class AuthService {
  async login(data) {
    try {
      if (!data.email) {
        throw new Error("O email do usuario é obrigatório.");
      }

      if (!data.senha) {
        throw new Error("A senha de usuario é obrigatório.");
      }

      const usuario = await Usuario.pegarPeloEmail(data.email);

      if (!usuario) {
        throw new Error("Usuario não cadastrado.");
      }

      const senhaIguais = await bcryptjs.compare(data.senha, usuario.senha);

      if (!senhaIguais) {
        throw new Error("Usuario ou senha invalido.");
      }

      const accessToken = jsonwebtoken.sign(
        {
          id: usuario.id,
          email: usuario.email,
        },
        constants.jsonSecret,
        {
          expiresIn: 86400,
        }
      );

      return { message: "Usuario conectado", accessToken };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async cadastrarUsuario(data) {
    try {
      const haveMissingKey = requiredKeys.some(
        (key, index) => !key.includes(Object.keys(data)[index])
      );

      if (haveMissingKey) {
        throw new Error("Os campos de nome, email e senha são obrigatórios.");
      }

      data.senha = await bcryptjs.hash(data.senha, 8);

      const usuario = new Usuario(data);
      const userSameEmail = await Usuario.pegarPeloEmail(usuario.email);

      if (userSameEmail) {
        throw new Error("Email já existente no banco de dados.");
      }

      const resposta = await usuario.salvar(usuario);
      return { message: "usuario criado ou atualizado", content: resposta };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default AuthService;

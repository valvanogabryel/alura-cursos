import { expect } from "@jest/globals";
import AuthService from "../../services/authService";
import bcryptjs from "bcryptjs";
import Usuario from "../../models/usuario";

const { cadastrarUsuario } = new AuthService();

describe("authService.cadastrarUsuario", () => {
  it("should throw an error if the user have at least one information missing", () => {
    // ? arrange
    const userMock = {
      nome: "Raphael",
      email: "raphael@teste.com.br",
    };

    // ? act (cadastrarUsuario) + assertion
    expect(cadastrarUsuario(userMock)).rejects.toThrowError(
      "Os campos de nome, email e senha são obrigatórios."
    );
  });

  it("should encrypt the user's password when save on database", async () => {
    const data = {
      nome: "Gabryel",
      email: "sabugodemio@gmail.com",
      senha: "gabryelval123",
    };

    const { content: results } = await cadastrarUsuario(data);
    const equalPasswords = await bcryptjs.compare(
      "gabryelval123",
      results.senha
    );

    expect(equalPasswords).toStrictEqual(true);

    await Usuario.excluir(results.id);
  });

  it("should not allow to sign up two users with the same email", async () => {
    const userMock = {
      nome: "Gabryel",
      email: "valvanogabrye@gmail.com",
      senha: "gabryelval123",
    };

    expect(cadastrarUsuario(userMock)).rejects.toThrowError(
      "Email já existente no banco de dados."
    );
  });

  it("should return a message when user sing up", async () => {
    const userMock = {
      nome: "Nicolau",
      email: "nicoboy@gmail.com",
      senha: "nico1999",
    };

    const { message, content: results } = await cadastrarUsuario(userMock);

    expect(message).toMatch("usuario criado ou atualizado");

    await Usuario.excluir(results.id);
  });

  it("should validate the user informations", async () => {
    const userMock = {
      nome: "Nicolas",
      email: "nicolasferr@gmail.com",
      senha: "nicoakaferr12",
    };

    const { content: userSaved } = await cadastrarUsuario(userMock);

    expect(userSaved).toEqual(expect.objectContaining(userMock));
    expect(userSaved).toMatchObject(userMock);

    await Usuario.excluir(userSaved.id);
  });
});

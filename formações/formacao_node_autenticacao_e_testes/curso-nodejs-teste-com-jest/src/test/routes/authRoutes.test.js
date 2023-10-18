import request from "supertest";
import { afterEach, beforeEach, describe, expect } from "@jest/globals";
import app from "../../app";
import bcryptjs from "bcryptjs";
import Usuario from "../../models/usuario";

let server;
beforeEach(() => {
  const port = 3001;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("POST /login", () => {
  it("should throw an error if one of the fields is not provided (email, password)", async () => {
    const loginMock = {
      email: "valvanogabryel@gmail.com",
    };

    await request(server)
      .post("/login")
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });

  it("should validate if the user is signed up", async () => {
    const loginMock = {
      email: "damiano@gmail.com",
      senha: "damiano",
    };

    await request(server)
      .post("/login")
      .set("Accept", "application/json")
      .send(loginMock)
      .expect(500)
      .expect('"Usuario não cadastrado."');
  });

  it("should validate incorrects email and password", async () => {
    const loginMock = {
      email: "valvanogabryel@gmail.com",
      senha: "senhaerrada",
    };

    await request(server)
      .post("/login")
      .set("Accept", "application/json")
      .send(loginMock)
      .expect(500)
      .expect('"Usuario ou senha invalido."');
  });

  it("should return an access token when user login", async () => {
    const loginMock = {
      email: "valvanogabryel@gmail.com",
      senha: "gabryelval123",
    };

    const { body } = await request(server)
      .post("/login")
      .set("Accept", "application/json")
      .send(loginMock)
      .expect(201);

    expect(body.message).toBe("Usuario conectado");
    expect(body).toHaveProperty("accessToken");
  });
});

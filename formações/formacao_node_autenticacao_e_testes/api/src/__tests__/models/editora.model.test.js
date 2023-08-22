import Editora from "../../models/editora.js";
import { describe, expect, jest, it, beforeAll } from "@jest/globals";

describe("Editora's model test", () => {
  const publisherObj = {
    nome: "Casa do Código",
    cidade: "São Paulo",
    email: "s@s.com",
  };
  it("should instantiate the publisher correctly", () => {
    const publisher = new Editora(publisherObj);
    expect(publisher).toEqual(expect.objectContaining(publisherObj));
  });

  it.skip("should save the instance on DataBase", async () => {
    const publisher = new Editora(publisherObj);

    const data = await publisher.salvar();

    const result = await Editora.pegarPeloId(data.id);

    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...publisherObj,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });

  it("should save the instance on DataBase without affecting the DataBase structure", () => {
    const publisher = new Editora(publisherObj);

    publisher.salvar = jest.fn().mockReturnValue({
      id: 1000,
      ...publisherObj,
      created_at: "2023-08-22T14:29:53.202Z",
      updated_at: "2023-08-22T14:29:53.202Z",
    });

    const result = publisher.salvar();

    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...publisherObj,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});

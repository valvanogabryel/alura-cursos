import Editora from "../../models/editora.js";
import { describe, expect } from "@jest/globals";

describe("Editora's model test", () => {
  const publisherObj = {
    nome: "Casa do Código",
    cidade: "São Paulo",
    email: "s@s.com",
  };
  it("should instantiate correctly", () => {
    const publisher = new Editora(publisherObj);
    expect(publisher).toEqual(expect.objectContaining(publisherObj));
  });

  it("should save the instance on DataBase", async () => {
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
});

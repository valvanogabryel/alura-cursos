import db from "../../db/dbconfig";

describe("dbConfig tests", () => {
  it("should test the connection with the database", async () => {
    const authorMock = {
      nome: "Lucas Moreira",
      nacionalidade: "brasileiro",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const [id] = await db("autores").insert(authorMock);
    const selectedAuthor = await db("autores").where("id", id).first();

    expect(selectedAuthor.nome).toBe(authorMock.nome);

    await db("autores").where({ id }).del();
  });
});

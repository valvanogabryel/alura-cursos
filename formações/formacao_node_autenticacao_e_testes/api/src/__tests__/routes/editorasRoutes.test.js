import { afterEach, beforeEach, describe, expect } from "@jest/globals";
import app from "../../app.js";
import request from "supertest";

let server;
const port = 3000;

beforeEach(() => {
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("GET /editoras", () => {
  it("should return a list of publishers", async () => {
    const results = await request(app)
      .get("/editoras")
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(200);

    expect(results.body[0].email).toBe("e@e.com");
  });
});

let id;
describe("POST /editoras", () => {
  it("should create a new Publisher", async () => {
    const res = await request(app)
      .post("/editoras")
      .send({
        nome: "CDC",
        email: "cdc@cdc.com",
        cidade: "São Paulo",
      })
      .expect(201);

    id = res.body.content.id;
  });
});

describe("GET /editoras/:id", () => {
  it("should return a single publisher", async () => {
    await request(app).get(`/editoras/${id}`).expect(200);
  });
});

describe("PUT /editoras/:id", () => {
  it("should update a single publisher", async () => {
    await request(app)
      .put(`/editoras/${id}`)
      .send({
        nome: "Jambô",
      })
      .expect(200);
  });
});

describe("DELETE /editoras/:id", () => {
  it("should delete a publisher", async () => {
    await request(app).delete(`/editoras/${id}`).expect(200);
  });
});

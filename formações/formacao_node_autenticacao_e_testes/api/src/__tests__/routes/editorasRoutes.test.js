import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  jest,
} from "@jest/globals";
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
  it("should create a new publisher", async () => {
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

  it("shouldn't create a new publisher if there's missing informations", async () => {
    await request(app).post("/editoras").send({}).expect(400);
  });
});

describe("GET /editoras/:id", () => {
  it("should return a single publisher", async () => {
    await request(app).get(`/editoras/${id}`).expect(200);
  });
});

describe("PUT /editoras/:id", () => {
  test.each([
    ["nome", { nome: "Jambô" }],
    ["cidade", { cidade: "SP" }],
    ["email", { email: "jamboje@gmail.com" }],
  ])(`should update a single publisher [%s]`, async (key, param) => {
    const req = { request };
    const spy = jest.spyOn(req, "request");

    await req.request(app).put(`/editoras/${id}`).send(param).expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe("DELETE /editoras/:id", () => {
  it("should delete a publisher", async () => {
    await request(app).delete(`/editoras/${id}`).expect(200);
  });
});

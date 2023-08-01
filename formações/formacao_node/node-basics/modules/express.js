import express from "express";

const port = 8080;

const app = express();

app.get("/", (_, res) => {
  res.contentType("text/html").send("<h1>Hello World!</h1>");
});

app.get("/users", (_, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@doe.com",
      age: 34,
    },
    {
      name: "Jane Doe",
      email: "jane@doe.com",
      age: 24,
    },
    {
      name: "Jesse Doe",
      email: "jesse@doe.com",
      age: 20,
    },
  ];

  res
    .status(200)
    .contentType("application/json")
    // .header("Content-Type", "application/json")
    .send(JSON.stringify(users));
});

app.listen(8080, () => {
  console.log(`Server running on port ${port}`);
});

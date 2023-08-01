import express from "express";
import dotenv from "dotenv";
import UserModel from "../src/database/models/user.model.js";

dotenv.config();

const port = 8080;

const app = express();
app.set("view engine", "ejs");
app.set("views", "src/views/");

app.use(express.json());
app.use((req, _, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content-Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (_, res) => {
  const users = await UserModel.find({});

  res.render("index", {
    users,
  });
});

app.get("/", (_, res) => {
  res.contentType("text/html").send("<h1>Hello World!</h1>");
});

app.get("/users", async (_, res) => {
  try {
    const users = await UserModel.find({});

    res
      .status(200)
      .contentType("application/json")
      // .header("Content-Type", "application/json")
      .json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.status(200).json(user).contentType("application/json");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(8080, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send({
    message: "Server started",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

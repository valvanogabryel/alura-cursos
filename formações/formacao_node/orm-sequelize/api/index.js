import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());

app.get("/teste", (_, res) => {
  res.status(200).send({
    message: "Welcome!",
  });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

export default app;

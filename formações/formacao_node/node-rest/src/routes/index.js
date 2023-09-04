import express from "express";
import books from "./books_router.js";

const routes = (app) => {
  app.route("/", (_, res) => {
    res.status(200).send({ message: "Home" });
  });

  app.use(express.json(), books);
};

export default routes;

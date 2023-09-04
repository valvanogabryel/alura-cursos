import express from "express";
import books from "./books_router.js";

const routes = (app) => {
  app.route("/").get((_, res) => {
    res.status(200).send({ message: "Go to /books" });
  });

  app.use(express.json(), books);
};

export default routes;

import express from "express";
import books from "./books_router.js";
import authors from "./authors_router.js";

const routes = (app) => {
  app.route("/").get((_, res) => {
    res.status(200).send({
      title: "Curso de NodeJS",
    });
  });

  app.use(express.json(), books, authors);
};

export default routes;

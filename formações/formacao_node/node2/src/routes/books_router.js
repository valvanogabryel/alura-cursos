import express from "express";
import BooksController from "../controllers/booksController.js";

const router = express.Router();

router.get("/books", BooksController.listBooks);
router.get("/books/query", BooksController.listBookByPublisher);
router.get("/books/:id", BooksController.listBookById);
router.post("/books", BooksController.registerBook);
router.put("/books/:id", BooksController.updateBook);
router.delete("/books/:id", BooksController.deleteBook);

export default router;

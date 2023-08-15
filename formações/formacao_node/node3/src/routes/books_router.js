import express from "express";
import BooksController from "../controllers/booksController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router.get("/books", BooksController.listBooks, paginate);
router.get("/books/query", BooksController.listBookByFilter, paginate);
router.get("/books/:id", BooksController.listBookById);
router.post("/books", BooksController.registerBook);
router.put("/books/:id", BooksController.updateBook);
router.delete("/books/:id", BooksController.deleteBook);

export default router;

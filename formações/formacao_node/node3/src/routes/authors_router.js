import express from "express";
import AuthorsController from "../controllers/authorsController.js";

const router = express.Router();

router.get("/authors", AuthorsController.listAuthors);
router.get("/authors/:id", AuthorsController.listAuthorById);
router.post("/authors", AuthorsController.registerAuthor);
router.put("/authors/:id", AuthorsController.updateAuthor);
router.delete("/authors/:id", AuthorsController.deleteAuthor);

export default router;

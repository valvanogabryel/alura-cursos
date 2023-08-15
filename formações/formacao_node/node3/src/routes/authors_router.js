import express from "express";
import AuthorsController from "../controllers/authorsController.js";
import paginate from "../middlewares/paginate.js";

const router = express.Router();

router.get("/authors", AuthorsController.listAuthors, paginate);
router.get("/authors/:id", AuthorsController.listAuthorById);
router.post("/authors", AuthorsController.registerAuthor);
router.put("/authors/:id", AuthorsController.updateAuthor);
router.delete("/authors/:id", AuthorsController.deleteAuthor);

export default router;

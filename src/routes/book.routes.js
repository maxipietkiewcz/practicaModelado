import { Router } from "express";
import { createBook, getAllBooks, getBook, updateBook, deleteBook } from "../controllers/controllersBooks.js";

const router = Router();

//routes of books
router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export {router as booksRoutes};


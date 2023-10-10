import { Router } from "express";
import { createAuthor, getAllAuthors, getAuthor, updateAuthor, deleteAuthor } from "../controllers/controllersAuthor.js";


const router = Router();

//routes of authors
router.post("/", createAuthor);
router.get("/", getAllAuthors);
router.get("/:id", getAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

export {router as authorsRoutes};

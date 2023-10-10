import { bookModel} from "../models/book.js";
import path from "path";
import fs from "fs";

//get book
export const getBook = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id).populate("author");
        res.json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

//get all book
export const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find().populate("author");
        res.json(books);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

//create book
export const createBook = async (req, res) => {
    try {
        // Verificar si req.files.imageOfBook existe
        if (!req.files || !req.files.imageOfBook) {
            return res.status(400).json({ message: 'No se proporcionó un archivo de imagen' });
        }

        const portada = req.files.imageOfBook;
        const currentWorkingDirectory = process.cwd();
        const imgFolderPath = path.resolve(currentWorkingDirectory, 'public/img');

        // Crear la carpeta "public/img" si no existe
        if (!fs.existsSync(imgFolderPath)) {
            fs.mkdirSync(imgFolderPath, { recursive: true });
        }
        
        portada.mv(path.resolve(imgFolderPath, portada.name), async err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error al guardar la imagen' });
            }

            const newBook = new bookModel(req.body);
            newBook.imageOfBook = `/img/${portada.name}`;
            await newBook.save();
            res.status(201).json(newBook);
        });
        
    } catch (error) {
        console.error(error);
        res.status(409).json({ message: error.message });
    }
}



//update book
export const updateBook = async (req, res) => {
    try {
        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBook);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

//delete book
export const deleteBook = async (req, res) => {
    try {
        await bookModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}
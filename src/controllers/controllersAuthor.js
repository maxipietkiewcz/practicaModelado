import { authorModel} from "../models/author.js";


//get author
export const getAuthor = async (req, res) => {
    try {
        const author = await authorModel.findById(req.params.id).populate("books");
        res.json(author);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

//get all author
export const getAllAuthors = async (req, res) => {
    try {
        const authors = await authorModel.find().populate("books");
        res.json(authors);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

//create author
export const createAuthor = async (req, res) => {
    const newAuthor = new authorModel(req.body);
    try {
        await newAuthor.save();
        res.status(201).json(newAuthor);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);
    }
}

//update author
export const updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await authorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAuthor);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

//delete author
export const deleteAuthor = async (req, res) => {
    try {
        await authorModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}
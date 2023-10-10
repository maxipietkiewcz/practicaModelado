import { Schema, model} from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type: Number,
        required: true
    },
   imageOfBook: {
        type: String,
        required: true
    },  
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    }
})

export const bookModel = model('Book', bookSchema)
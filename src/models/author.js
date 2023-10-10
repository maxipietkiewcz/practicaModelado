import {Schema, model} from "mongoose";


 const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    biography: {
        type: String
    },
    books: 
        {
            type: Schema.Types.ObjectId,
            ref: "Book"
        }
    
})
   

export const authorModel = model('Author', authorSchema)
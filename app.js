import express from "express";
import dotenv from "dotenv";
import {dbConnection} from "./src/config/conectDatabase.js";
import { authorsRoutes } from "./src/routes/author.routes.js";
import { booksRoutes } from "./src/routes/book.routes.js";
import fileUpload from "express-fileupload";



const app = express();
dotenv.config();
app.use(express.json());





//required middleware
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
//middleware
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(fileUpload( { 
    useTempFiles : true , 
    tempFileDir : '/tmp/' 
} ) ) ;

//routes
app.use("/author", authorsRoutes);
app.use("/book", booksRoutes);


//conect to database
dbConnection()



//server
const port = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
    console.log("Server running on localhost:" + port);
})



//import express
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();

//create instance
const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.mongodbURI;


//enable CORS for all routes
app.use(cors());

//json parser
app.use(express.json());


//connect to mongodb
try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to Database successfully");
} catch (error){
    console.log("Erroor : ", error);
}



//define routes
app.use("/book", bookRoute);
app.use("/User", userRoute);



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
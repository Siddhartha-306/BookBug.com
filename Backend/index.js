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
app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

//json parser
app.use(express.json());

mongoose.connect('mongodb+srv://siddharthavarshney30:fqYJ6e7ah5fkkjEl@cluster0.s9lc5pf.mongodb.net/BookBug?retryWrites=true&w=majority&appName=Cluster0')

// //connect to mongodb
// try{
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log("Connected to Database successfully");
// } catch (error){
//     console.log("Erroor : ", error);
// }



//define routes
app.use("/book", bookRoute);
app.use("/User", userRoute);



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

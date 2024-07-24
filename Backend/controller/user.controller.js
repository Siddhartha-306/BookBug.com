import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try{
        //destructure the req body
        const {name, email, password} = req.body;
        
        //check if user is already existed or not
        const user = await User.findOne({email});

        //if user already existed
        if(user)
        {
            res.status(400);
            return res.json({
                message: "User already exists"
            });
        }

        //hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        //if user is not existed create a new entry
        const createUser = new User({
            name : name,
            email : email,
            password : hashedPassword,
        });

        //save the user into the db
        await createUser.save();

        res.status(201).json({
            message: "User created successfully",
            user:{
                _id: createUser._id,
                name: createUser.name,
                email: createUser.email,
            }
        });
    }
    catch(error){
        console.log("Error: ",error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};



//controller for login

export const login = async (req, res) => {
    
    try{
        //destructure the data from req's body
        const {email, password} = req.body;

        //check if all details are present or not, if not return the response
        if(!email || !password)
        {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        //check if user is present or not, if not then return the response of not found
        const user = await User.findOne({email});

        if(!user)
        {
            return res.status(404).json({
                message: "User not found"
            });
        }
        

        //alternate way of comparing the passwords
        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch)
        {
            return res.status(400).json({
                message: "Password doesn't match"
            });
        }


        // //hash the passsword received through req's body
        // const hashedPass = await bcryptjs.hash(password, 10);

        // //check if the enteres password is equal to the user's password or not
        // if(user.password !== hashedPass)
        // {
        //     return res.status(400).json({
        //         message: "Password doesn't match!!!"
        //     });
        // }

        res.status(200).json({
            message: "Login successfull",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }
    catch(error){
        console.log("error: ", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
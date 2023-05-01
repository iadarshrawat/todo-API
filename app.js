import { constants } from "buffer";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/user.js";
import taskrouts from "./routes/task.js";
import { connectdb } from "./data/database.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env",
})

// we have to use this middleware for destructuring the id from the req.body and get play with json in postman.....
app.use(express.json());

// we have to use cookie Parser to take the informantion from cookie
router.use(cookieParser());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST","PUT", "DELETE"],
    credentials:true, // for cookies
}))

// suppose i have a url (/user/all) and user is added in all URLs in file than we dont have to pass the user again and again in router we solve this problem using middleware
app.use('/users', router);
app.use('/users', taskrouts);

app.get("/",(req, res)=>{
    res.send("hello wrold");
})





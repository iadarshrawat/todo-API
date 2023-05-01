import mongoose from "mongoose";
import { User } from "./user.js";

const UserSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        rer:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

export const Task = mongoose.model('Task', UserSchema);
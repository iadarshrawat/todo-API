import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:"true",  
    },
    email:{
        type:String,
        required:"true",
        unique:true,
    },
    password:{
        type:String,
        required:"true",
        select:false,
    },
    createdAt:{
        type:Date,
        required:"true",
        default:Date.now,
    },
})

export const User = mongoose.model('user', UserSchema);
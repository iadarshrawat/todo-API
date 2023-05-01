import mongoose from "mongoose";

// connection with mongo using mongoose
export const connectdb = ()=> mongoose.connect(process.env.MONGO_URI,{
    dbName:"API-Server",
})
.then((c)=>console.log(`database is connected with ${c.connection.host}`))
.catch((e)=>{console.log(e)});

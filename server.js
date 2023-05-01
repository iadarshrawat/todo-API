import { app } from "./app.js";
import router from "./routes/user.js";
import { connectdb } from "./data/database.js";
import cookieParser from "cookie-parser";

app.use(router);

// function of db
connectdb();
router.use(cookieParser());


app.listen(4000, ()=>{
    console.log(`server is working in port:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
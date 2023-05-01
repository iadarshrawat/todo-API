import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode=200)=>{
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);
    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge: 15* 60 * 1000,
        sameSite:process.env.NODE_ENV === "development" ? "lax":"none",
        // memdatory when samesite in none and not work in postman
        secure:process.env.NODE_ENV === "development" ? false:true,
    })
    .json({
        status:true,
        message,
    })
}

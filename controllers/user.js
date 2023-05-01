import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import e from "express";

export const getAllUsers = async (req, res) => {

}

export const login = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid Email or Password",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(404).json({
                success: false,
                message: "Invalid Email or Password",
            })

        sendCookie(user, res, `Welcome back, ${user.name}`, 200);
    } catch (error) {
        console.log(error)
    }

}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(404).json({
            success: false,
            message: "user Already Exist",
        });

        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({ name, email, password: hashedPassword })

        sendCookie(user, res, "successfully Register, 201");

    } catch (error) {
        console.log(error)
    }
}

export const logout = (req, res) => {
    res.status(200).cookie("token", "", { 
        expires: new Date(Date.now()),
        sameSite:process.env.NODE_ENV === "development" ? "lax":"none",
        secure:process.env.NODE_ENV === "development" ? false:true, 
    }).json({
        success: true,
        user: req.user,
    })
}

export const getMyProfile = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
}
import e from "express";
import { Task } from "../models/task.js";
export const newTask = async (req, res, next) => {
    try {
        const { title, discription } = req.body;
        await Task.create({
            title,
            discription,
            user: req.user,
        });

        res.status(201).json({
            success: true,
            message: "Task added successfully",
        })
    } catch (error) {
        console.log(error)
    }
}

export const getMyTask = async (req, res, next) => {
    try {
        const userid = req.user._id;
        const task = await Task.find({ user: userid });

        res.status(200).json({
            success: true,
            task,
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id)

        // if(!task) return res.status(404).json({success:false});

        task.isCompleted = !task.isCompleted;
        await task.save();
        res.status(200).json({
            success: true,
            message: "task updated"
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        // if(!task) return next(new Error("Invalid Id"));

        await task.deleteOne();
        res.status(200).json({
            success: true,
            message: "task deleted"
        })
    } catch (error) {
        console.log(error)
    }
}
import express from "express"
import cookieParser from "cookie-parser";
import { isAuthenticated } from "../middlewares/auth.js";

import {
    getAllUsers,
    register,
    login,
    logout,
    getMyProfile
} from "../controllers/user.js";

const router = express.Router();
router.use(cookieParser());

router.get("/all", getAllUsers)
router.post("/new", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/me", isAuthenticated ,getMyProfile)

export default router;


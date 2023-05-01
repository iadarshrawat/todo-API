import express from "express";
import { isAuthenticated} from "../middlewares/auth.js";
import { newTask , getMyTask, updateTask, deleteTask} from "../controllers/task.js";

const router = express();

router.post('/task/new', isAuthenticated ,newTask);
router.get('/task/my', isAuthenticated ,getMyTask);

router.route('/task/:id').put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask);

export default router;
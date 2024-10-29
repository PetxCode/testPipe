import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from "../controller/taskController";

const router: any = Router();
router.route("/create-task").post(createTask);
router.route("/read-task").get(getTask);
router.route("/update-task/:taskID").patch(updateTask);
router.route("/delete-task/:taskID").delete(deleteTask);

export default router;

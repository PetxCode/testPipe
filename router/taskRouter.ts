import { Router } from "express";
import { createTask, getTask } from "../controller/taskController";

const router: any = Router();
router.route("/create-task").post(createTask);
router.route("/read-task").get(getTask);

export default router;

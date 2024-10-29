"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controller/taskController");
const router = (0, express_1.Router)();
router.route("/create-task").post(taskController_1.createTask);
router.route("/read-task").get(taskController_1.getTask);
exports.default = router;

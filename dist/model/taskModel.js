"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskModel = new mongoose_1.Schema({
    title: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("task", taskModel);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 1144;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World from CodeLab!");
});
app.get("/test", (req, res) => {
    res.send("This is codelab!");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

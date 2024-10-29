"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
const URL = "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/testTask?retryWrites=true&w=majority&appName=Cluster0";
const port = 1144;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World from CodeLab!");
});
app.get("/test", (req, res) => {
    res.send("This is codelab!");
});
app.use("/api", taskRouter_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connect)(URL)
        .then(() => {
        console.log(`Server is running on port ${port}`);
    })
        .catch((err) => console.log(err));
}));

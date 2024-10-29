import express, { Application, Request, Response } from "express";
import { connect } from "mongoose";
import task from "./router/taskRouter";
const URL: string =
  "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/testTask?retryWrites=true&w=majority&appName=Cluster0";
const port: number = 1166;
const app: Application = express();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from CodeLab!");
});
app.get("/test", (req: Request, res: Response) => {
  res.send("This is codelab!");
});

app.use("/api", task);

app.listen(port, async () => {
  await connect(URL)
    .then(() => {
      console.log(`Server is running on port ${port}`);
    })
    .catch((err) => console.log(err));
});

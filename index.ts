import express, { Application, Request, Response } from "express";

const port: number = 1144;
const app: Application = express();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from CodeLab!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

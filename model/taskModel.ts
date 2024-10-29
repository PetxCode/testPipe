import { Document, model, Schema } from "mongoose";

interface iTask {
  title: string;
}

interface iTaskData extends iTask, Document {}

const taskModel = new Schema<iTaskData>(
  {
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iTaskData>("task", taskModel);

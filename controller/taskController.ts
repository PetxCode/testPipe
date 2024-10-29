import { Request, Response } from "express";
import taskModel from "../model/taskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    const task = await taskModel.create({
      title,
    });

    return res.status(201).json({
      data: task,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await taskModel.find();

    return res.status(201).json({
      data: task,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;
    const { title } = req.body;
    const task = await taskModel.findByIdAndUpdate(
      taskID,
      { title },
      { new: true }
    );

    return res.status(201).json({
      data: task,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;
    const task = await taskModel.findByIdAndDelete(taskID);

    return res.status(201).json({
      data: task,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

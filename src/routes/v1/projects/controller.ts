import { Request, Response } from "express";

export const listProjects = (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const getProject = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ id, name: `Project ${id}` });
};

export const listProjectTasks = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json([
    { id: 1, name: `Task 1 for Project ${id}` },
    { id: 2, name: `Task 2 for Project ${id}` },
  ]);
};

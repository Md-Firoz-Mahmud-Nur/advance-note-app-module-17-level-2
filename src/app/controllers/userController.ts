import express, { Request, Response } from "express";
import { User } from "../models/userModel";

export const userRoutes = express.Router();

userRoutes.post("/create", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create(body);
  res.status(201).json({
    success: true,
    message: "User created successfully",
    user,
  });
});

userRoutes.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});

userRoutes.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  res.status(200).json({
    success: true,
    user,
  });
});

userRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updatedBody = req.body;
  const notes = await User.findByIdAndUpdate(userId, updatedBody, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    notes,
  });
});

userRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    user,
  });
});

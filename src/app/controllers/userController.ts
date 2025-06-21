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

import express, { Application, Request, Response } from "express";
import { notesRoutes } from "./app/controllers/notesController";
import { userRoutes } from "./app/controllers/userController";
export const app: Application = express();
app.use(express.json());

app.use("/notes", notesRoutes);
app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app!");
});

export default app;

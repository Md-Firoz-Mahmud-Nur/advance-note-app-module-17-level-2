import express, { Application, Request, Response } from "express";
import { notesRoutes } from "./app/controllers/notes.controller";
export const app: Application = express();
app.use(express.json());

app.use("/notes", notesRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app!");
});

export default app;

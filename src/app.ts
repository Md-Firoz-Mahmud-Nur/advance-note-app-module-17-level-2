import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();

const noteSchema = new Schema({
  title: String,
  content: String,
  publishDate: String,
});

const Note = model("note", noteSchema);

app.post("/createNote", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning Mongoose",
    content: "I am learning mongoose",
    publishDate: "hello publish date",
  });

  await myNote.save();

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note: myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app!");
});

export default app;

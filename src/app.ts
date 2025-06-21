import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();

const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "No content provided by user" },
  category: {
    type: String,
    enum: ["personal", "work", "study", "other"],
    default: "personal",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "gray" },
  },
});

const Note = model("note", noteSchema);

app.post("/createNote", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning Express",
    // content: "I am learning mongoose",
    publishDate: "hello publish date",
    tags: {
      label: "Database",
    }
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

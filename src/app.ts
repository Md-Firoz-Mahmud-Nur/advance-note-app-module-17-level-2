import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();
app.use(express.json());

const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "No content provided by user", trim: true },
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

app.post("/notes/createNote", async (req: Request, res: Response) => {
  const body = req.body;
  console.log("body", body);
  const note = await Note.create(body);

  // approach 01

  // const myNote = new Note({
  //   title: "Learning Express",
  //   // content: "I am learning mongoose",
  //   publishDate: "hello publish date",
  //   tags: {
  //     label: "Database",
  //   }
  // });

  // await myNote.save();

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note,
  });
});

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();
  res.status(200).json({
    success: true,
    notes,
  });
});

app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const notes = await Note.findById(noteId);
  // const notes = await Note.findOne({ _id: noteId });

  res.status(200).json({
    success: true,
    notes,
  });
});

app.patch("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updatedBody = req.body;
  const notes = await Note.findByIdAndUpdate(noteId, updatedBody, {
    new: true,
  });
  // const notes = await Note.findOneAndUpdate({ _id: noteId }, updatedBody,{new: true});

  res.status(200).json({
    success: true,
    notes,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to note app!");
});

export default app;

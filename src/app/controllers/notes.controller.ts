import { Note } from "../models/notes.model";
import express, { Request, Response } from "express";


export const notesRoutes = express.Router();


notesRoutes.post("/createNote", async (req: Request, res: Response) => {
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

notesRoutes.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find();
  res.status(200).json({
    success: true,
    notes,
  });
});

notesRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const notes = await Note.findById(noteId);
  // const notes = await Note.findOne({ _id: noteId });

  res.status(200).json({
    success: true,
    notes,
  });
});

notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {
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

notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const notes = await Note.findByIdAndDelete(noteId);

  res.status(200).json({
    success: true,
    notes,
  });
});

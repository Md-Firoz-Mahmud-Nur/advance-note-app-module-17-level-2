import { model, Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: {
      type: String,
      default: "No content provided by user",
      trim: true,
    },
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
  },
  {
    timestamps: true,
  }
);

export const Note = model("note", noteSchema);

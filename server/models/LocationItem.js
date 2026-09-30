import { Schema } from "mongoose";

// Recursive folder/file node — mirrors the shape used in src/constants/index.js
// (WORK_LOCATION / ABOUT_LOCATION / RESUME_LOCATION children trees).
const locationItemSchema = new Schema(
  {
    name: { type: String, required: true },
    icon: { type: String },
    kind: { type: String, enum: ["folder", "file"], required: true },
    position: { type: String },
    windowPosition: { type: String },
    fileType: { type: String, enum: ["txt", "url", "img", "fig", "pdf"] },
    description: { type: [String], default: undefined },
    href: { type: String },
    imageUrl: { type: String },
    subtitle: { type: String },
    image: { type: String },
  },
  { _id: true }
);

locationItemSchema.add({ children: { type: [locationItemSchema], default: undefined } });

export default locationItemSchema;

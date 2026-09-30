import { Schema, model } from "mongoose";
import locationItemSchema from "./LocationItem.js";

const locationSchema = new Schema(
  {
    key: { type: String, enum: ["work", "about", "resume"], required: true, unique: true },
    name: { type: String, required: true },
    icon: { type: String },
    root: { type: locationItemSchema, required: true },
  },
  { timestamps: true }
);

export default model("Location", locationSchema);

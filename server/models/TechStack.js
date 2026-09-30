import { Schema, model } from "mongoose";

const techStackSchema = new Schema(
  {
    category: { type: String, required: true },
    items: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default model("TechStack", techStackSchema);

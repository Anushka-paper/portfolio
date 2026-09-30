import { Schema, model } from "mongoose";

const gallerySchema = new Schema(
  {
    img: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Gallery", gallerySchema);

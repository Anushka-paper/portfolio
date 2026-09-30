import { Schema, model } from "mongoose";

const photosLinkSchema = new Schema(
  {
    icon: { type: String, required: true },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("PhotosLink", photosLinkSchema);

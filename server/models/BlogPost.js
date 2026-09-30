import { Schema, model } from "mongoose";

const blogPostSchema = new Schema(
  {
    date: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("BlogPost", blogPostSchema);

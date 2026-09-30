import { Schema, model } from "mongoose";

const socialSchema = new Schema(
  {
    text: { type: String, required: true },
    icon: { type: String, required: true },
    bg: { type: String, required: true },
    link: { type: String, default: null },
  },
  { timestamps: true }
);

export default model("Social", socialSchema);

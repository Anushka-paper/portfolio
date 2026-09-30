import "dotenv/config";
import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import { connectDB } from "./db.js";

import authRoutes from "./routes/auth.js";
import uploadRoutes from "./routes/uploads.js";
import locationRoutes from "./routes/locations.js";
import makeCrudRouter from "./routes/makeCrudRouter.js";

import Gallery from "./models/Gallery.js";
import BlogPost from "./models/BlogPost.js";
import Social from "./models/Social.js";
import TechStack from "./models/TechStack.js";
import PhotosLink from "./models/PhotosLink.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/gallery", makeCrudRouter(Gallery));
app.use("/api/blog-posts", makeCrudRouter(BlogPost));
app.use("/api/socials", makeCrudRouter(Social));
app.use("/api/tech-stack", makeCrudRouter(TechStack));
app.use("/api/photos-links", makeCrudRouter(PhotosLink));

app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "CastError" || err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});

import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import asyncHandler from "../middleware/asyncHandler.js";

// Shared REST CRUD for the flat content collections (gallery, blogPosts,
// socials, techStack, photosLinks) — they all follow the same list/create/
// update/delete shape, only the Mongoose model differs.
export default function makeCrudRouter(Model) {
  const router = Router();

  router.get(
    "/",
    asyncHandler(async (req, res) => {
      const docs = await Model.find().sort({ createdAt: 1 });
      res.json(docs);
    })
  );

  router.post(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
      const doc = await Model.create(req.body);
      res.status(201).json(doc);
    })
  );

  router.put(
    "/:id",
    requireAuth,
    asyncHandler(async (req, res) => {
      const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!doc) return res.status(404).json({ error: "Not found" });
      res.json(doc);
    })
  );

  router.delete(
    "/:id",
    requireAuth,
    asyncHandler(async (req, res) => {
      const doc = await Model.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ error: "Not found" });
      res.status(204).end();
    })
  );

  return router;
}

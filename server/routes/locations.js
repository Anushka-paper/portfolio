import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Location from "../models/Location.js";

const router = Router();
const KEYS = ["work", "about", "resume"];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const docs = await Location.find({ key: { $in: KEYS } });
    const byKey = Object.fromEntries(docs.map((doc) => [doc.key, doc]));
    res.json(byKey);
  })
);

router.put(
  "/:key",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { key } = req.params;
    if (!KEYS.includes(key)) {
      return res.status(400).json({ error: "Unknown location key" });
    }

    const { name, icon, root } = req.body;
    const doc = await Location.findOneAndUpdate(
      { key },
      { key, name, icon, root },
      { new: true, upsert: true, runValidators: true }
    );
    res.json(doc);
  })
);

export default router;

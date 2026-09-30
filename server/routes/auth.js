import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";

const router = Router();

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const matches = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || "");
    if (!matches) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token });
  })
);

export default router;

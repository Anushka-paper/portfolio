// Vercel serverless entry point. Requests to /api/* are rewritten here
// (see vercel.json) and handled by the same Express app used for local
// dev (server/app.js) — just without a listening port, since Vercel's
// Node runtime invokes this as a per-request handler.
import app from "../server/app.js";

export default app;

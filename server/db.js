import mongoose from "mongoose";

// Cached across invocations on a warm serverless instance, so repeated
// requests in the same lambda don't reopen a new Mongo connection.
let connectionPromise = null;

export function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (mongoose.connection.readyState === 1) {
    return Promise.resolve(mongoose.connection);
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(uri).catch((err) => {
      connectionPromise = null;
      throw err;
    });
  }

  return connectionPromise;
}

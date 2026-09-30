import "dotenv/config";
import { connectDB } from "./db.js";
import Gallery from "./models/Gallery.js";
import BlogPost from "./models/BlogPost.js";
import Social from "./models/Social.js";
import TechStack from "./models/TechStack.js";
import PhotosLink from "./models/PhotosLink.js";
import Location from "./models/Location.js";
import {
  gallery,
  blogPosts,
  socials,
  techStack,
  photosLinks,
  locations,
} from "../src/constants/index.js";

// Strips the legacy per-array numeric `id` fields (not unique across the
// whole collection) so Mongo can assign real ObjectIds instead.
function stripId({ id, ...rest }) {
  return rest;
}

function stripLocationIds(node) {
  const { id, children, ...rest } = node;
  return {
    ...rest,
    ...(children ? { children: children.map(stripLocationIds) } : {}),
  };
}

async function seedCollection(Model, docs, label) {
  const count = await Model.countDocuments();
  if (count > 0) {
    console.log(`Skipping ${label}: already has ${count} documents`);
    return;
  }
  await Model.insertMany(docs);
  console.log(`Seeded ${label}: ${docs.length} documents`);
}

async function seedLocation(key, location) {
  const existing = await Location.findOne({ key });
  if (existing) {
    console.log(`Skipping location "${key}": already seeded`);
    return;
  }
  await Location.create({
    key,
    name: location.name,
    icon: location.icon,
    root: stripLocationIds(location),
  });
  console.log(`Seeded location "${key}"`);
}

async function main() {
  await connectDB();

  await seedCollection(Gallery, gallery.map(stripId), "gallery");
  await seedCollection(BlogPost, blogPosts.map(stripId), "blogPosts");
  await seedCollection(Social, socials.map(stripId), "socials");
  await seedCollection(TechStack, techStack, "techStack");
  await seedCollection(PhotosLink, photosLinks.map(stripId), "photosLinks");

  await seedLocation("work", locations.work);
  await seedLocation("about", locations.about);
  await seedLocation("resume", locations.resume);

  console.log("Seeding complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { create } from "zustand";
import api from "#api/client";
import {
  gallery as staticGallery,
  blogPosts as staticBlogPosts,
  socials as staticSocials,
  techStack as staticTechStack,
  photosLinks as staticPhotosLinks,
  locations as staticLocations,
} from "#constants";

// Mongo documents come back with `_id`; every consumer component keys off
// `id` (from the original static constants), so normalize on the way in.
function normalizeDoc({ _id, id, ...rest }) {
  return { id: id ?? _id, ...rest };
}

function normalizeLocationItem(item) {
  const { _id, id, children, ...rest } = item;
  return {
    ...rest,
    id: id ?? _id,
    ...(children ? { children: children.map(normalizeLocationItem) } : {}),
  };
}

function normalizeLocationDoc(doc) {
  if (!doc) return null;
  return normalizeLocationItem({ ...doc.root, name: doc.name, icon: doc.icon });
}

const useContentStore = create((set) => ({
  gallery: staticGallery,
  blogPosts: staticBlogPosts,
  socials: staticSocials,
  techStack: staticTechStack,
  photosLinks: staticPhotosLinks,
  locations: staticLocations,
  loaded: false,

  loadContent: async () => {
    const [gallery, blogPosts, socials, techStack, photosLinks, locationDocs] =
      await Promise.allSettled([
        api.get("/api/gallery"),
        api.get("/api/blog-posts"),
        api.get("/api/socials"),
        api.get("/api/tech-stack"),
        api.get("/api/photos-links"),
        api.get("/api/locations"),
      ]);

    set((state) => ({
      gallery: gallery.status === "fulfilled" ? gallery.value.map(normalizeDoc) : state.gallery,
      blogPosts:
        blogPosts.status === "fulfilled" ? blogPosts.value.map(normalizeDoc) : state.blogPosts,
      socials: socials.status === "fulfilled" ? socials.value.map(normalizeDoc) : state.socials,
      techStack:
        techStack.status === "fulfilled" ? techStack.value.map(normalizeDoc) : state.techStack,
      photosLinks:
        photosLinks.status === "fulfilled"
          ? photosLinks.value.map(normalizeDoc)
          : state.photosLinks,
      locations:
        locationDocs.status === "fulfilled"
          ? {
              work: normalizeLocationDoc(locationDocs.value.work) ?? state.locations.work,
              about: normalizeLocationDoc(locationDocs.value.about) ?? state.locations.about,
              resume: normalizeLocationDoc(locationDocs.value.resume) ?? state.locations.resume,
              trash: state.locations.trash,
            }
          : state.locations,
      loaded: true,
    }));
  },
}));

export default useContentStore;

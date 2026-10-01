import { useMemo, useRef, useState, useEffect } from "react";
import useContentStore from "#store/content";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import { Search, Folder, Newspaper, Code, Share2 } from "lucide-react";

const TYPE_ICON = {
  project: Folder,
  blog: Newspaper,
  tech: Code,
  social: Share2,
};

const SearchPopover = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const blogPosts = useContentStore((state) => state.blogPosts);
  const socials = useContentStore((state) => state.socials);
  const techStack = useContentStore((state) => state.techStack);
  const locations = useContentStore((state) => state.locations);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const index = useMemo(() => {
    const entries = [];

    (locations.work?.children ?? []).forEach((project) => {
      entries.push({
        id: `project-${project.id}`,
        type: "project",
        title: project.name,
        subtitle: "Project",
        action: () => {
          setActiveLocation(project);
          openWindow("finder");
        },
      });
    });

    blogPosts.forEach((post) => {
      entries.push({
        id: `blog-${post.id}`,
        type: "blog",
        title: post.title,
        subtitle: post.date,
        action: () => {
          openWindow("safari");
          window.open(post.link, "_blank", "noopener,noreferrer");
        },
      });
    });

    techStack.forEach(({ category, items }) => {
      items.forEach((item) => {
        entries.push({
          id: `tech-${category}-${item}`,
          type: "tech",
          title: item,
          subtitle: category,
          action: () => openWindow("terminal"),
        });
      });
    });

    socials.forEach((social) => {
      if (!social.link) return;
      entries.push({
        id: `social-${social.id}`,
        type: "social",
        title: social.text,
        subtitle: "Social",
        action: () => window.open(social.link, "_blank", "noopener,noreferrer"),
      });
    });

    return entries;
  }, [locations, blogPosts, techStack, socials, openWindow, setActiveLocation]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index.filter((entry) => entry.title.toLowerCase().includes(q)).slice(0, 8);
  }, [index, query]);

  return (
    <div className="nav-popover">
      <div className="nav-popover__search-input">
        <Search size={14} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, blog, tech, socials..."
        />
      </div>

      {query.trim() && (
        <ul className="nav-popover__results">
          {results.length === 0 && (
            <li className="nav-popover__muted-text">No results</li>
          )}
          {results.map((entry) => {
            const Icon = TYPE_ICON[entry.type];
            return (
              <li key={entry.id}>
                <button type="button" className="nav-popover__action" onClick={entry.action}>
                  <Icon size={14} />
                  <span className="flex-1 truncate">{entry.title}</span>
                  <span className="nav-popover__muted-text">{entry.subtitle}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchPopover;

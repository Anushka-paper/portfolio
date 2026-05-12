const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Figma Design",
    title: "FarmConnect App UI",
    image: "/images/blog1.png",
    link: "https://www.figma.com/proto/N3Dgep0xC0JW4A4yoM6U7p/Farm-Connect?node-id=1-7&p=f&t=FD55XsAwhpK5OkBp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 2,
    date: "Canva",
    title: "Graphic design",
    image: "/images/blog2.png",
    link: "https://www.canva.com/design/DAG0fI2x80I/AAtdvp8dO-j5oKoOfKAMNg/view?utm_content=DAG0fI2x80I&utm_campaign=designshare&utm_medium=link&utm_source=viewer",
  },
  {
    id: 3,
    date: "Figma Design",
    title: "Portfolio UI",
    image: "/images/blog4.png",
    link: "https://www.figma.com/proto/F1bk9m2VwOX8qS5Utg7KQG/Portfolio?node-id=3-33&p=f&t=6s49D07zhLrD2A2A-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 4,
    date: "YouTube Channel",
    title: "Graphics Designer of Gully Experts",
    image: "/images/blog3.png",
    link: "https://www.youtube.com/@GullyExpertscricket/videos",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["C/C++", "JavaScript", "Python", "Java"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Design",
    items: ["Figma", "Responsive Design", "Prototyping"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },

  {
    category: "Backend",
    items: ["Node.js"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Anushka-paper",
  },
  {
    id: 2,
    text: "Codolio",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://codolio.com/profile/paperD",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/insta.svg",
    bg: "#ff866b",
    link: null,  //TODO: add insta
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "www.linkedin.com/in/anushka-singh-d123",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "FarmConnect",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "FarmConnect.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built responsive e-commerce platform with React.js/Tailwind CSS, reducing user navigation time by 40%.",
            "Engineered core frontend features and managed agile workflow for 4 developers, improving delivery by 25%.",
            "Leading mobile app development with React Native to expand platform reach and user engagement.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "FarmConnect.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://farmconnect-alpha.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "FarmConnect.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/proto/N3Dgep0xC0JW4A4yoM6U7p/Farm-Connect?node-id=1-7&p=f&t=FD55XsAwhpK5OkBp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "TechSrijan ’26",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "TechSrijan ’26.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Contributed to the development of the TechSrijan ’26 event website by implementing UI components and pages using React.js",
            "Assisted in creating responsive layouts and basic design elements for improved user engagement.",
          ],
        },
        {
          id: 2,
          name: "TechSrijan ’26.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://techsrijan-green.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "TechSrijan ’26.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "GitHub.com",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Anushka-paper/techsrijan_1",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "SherLocked",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "SherLocked.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built a React.js visual puzzle game featuring interactive UI components and complex game state logic.",
            "Engineered a real-time leaderboard with scoring algorithms that tracked user rankings and boosted replay rates.",
            "Optimized component rendering and API calls for seamless gameplay and instantaneous leaderboard updates. ",
          ],
        },
        {
          id: 2,
          name: "SherLocked.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sherlocked-henna.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "SherLocked.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "GitHub.com",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Anushka-paper/Sherlocked",
          position: "top-60 right-20",
        },
      ],
    },
    
    // ▶ Project 4
    {
      id: 8,
      name: "Design Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[50vh] left-7",
      children: [
        {
          id: 1,
          name: "Design Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Crafting compelling visual narratives through posters, brochures, presentations, and brand identities. Turning ideas into stunning designs.",
          ],
        },
        {
          id: 2,
          name: "Design Portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://design-portfolio-gilt.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Design Portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-4.png",
        },
        {
          id: 5,
          name: "GitHub.com",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Anushka-paper/design_portfolio",
          position: "top-60 left-5",
        },
      ],
    },

  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/anushka.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal4.png",
    },
    {
      id: 3,
      name: "happy-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal2.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/anushka2.jpg",
      description: [
        "Hey! I’m Anushka 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

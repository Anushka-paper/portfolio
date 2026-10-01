import useContentStore from "#store/content";
import useWindowStore from "#store/window";
import { Github, Mail, FileText } from "lucide-react";

const UserPopover = () => {
  const { openWindow } = useWindowStore();
  const socials = useContentStore((state) => state.socials);
  const githubLink = socials.find((s) => s.text === "Github")?.link;

  return (
    <div className="nav-popover">
      <div className="nav-popover__profile">
        <img src="/images/anushka.jpg" alt="Anushka Singh" />
        <div>
          <p className="font-semibold">Anushka Singh</p>
          <p className="nav-popover__muted-text">Web Developer</p>
        </div>
      </div>

      <button
        type="button"
        className="nav-popover__action"
        onClick={() => openWindow("contact")}
      >
        <Mail size={14} />
        Contact
      </button>
      <button
        type="button"
        className="nav-popover__action"
        onClick={() => openWindow("resume")}
      >
        <FileText size={14} />
        Resume
      </button>
      {githubLink && (
        <button
          type="button"
          className="nav-popover__action"
          onClick={() => window.open(githubLink, "_blank")}
        >
          <Github size={14} />
          GitHub
        </button>
      )}
    </div>
  );
};

export default UserPopover;

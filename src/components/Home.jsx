import useContentStore from "#store/content";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { positionToStyle } from "#utils/positionStyle";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const locations = useContentStore((state) => state.locations);
  const handleOpenProjectFider = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };
  const projects = locations.work?.children ?? [];
  useGSAP(() => {
    Draggable.create(".folder");
  }, [projects]);
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="group folder"
            style={positionToStyle(project.windowPosition)}
            onClick={() => handleOpenProjectFider(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;

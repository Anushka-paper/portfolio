import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from "#windows";
import useContentStore from "#store/content";
import useLocationStore from "#store/location";

gsap.registerPlugin(Draggable);

const Desktop = () => {
  const loadContent = useContentStore((state) => state.loadContent);
  const setDefaultLocation = useLocationStore((state) => state.setDefaultLocation);

  useEffect(() => {
    loadContent().then(() => {
      setDefaultLocation(useContentStore.getState().locations.work);
    });
  }, [loadContent, setDefaultLocation]);

  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Text/>
      <Image/>
      <Finder/>
      <Contact/>
      <Photos/>
      <Home/>
    </main>
  );
};

export default Desktop;

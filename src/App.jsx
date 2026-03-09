import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
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
    </main>
  );
};

export default App
import { useEffect } from "react";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Craft } from "./sections/Craft";
import { Education } from "./sections/Education";
import { Hero } from "./sections/Hero";
import { Nav } from "./sections/Nav";
import { Skills } from "./sections/Skills";
import { Work } from "./sections/Work";
import { SectionControls } from "./components/SectionControls";
import { ui } from "./lib/content";

function syncMeta() {
  document.title = ui.meta.title;

  const setMeta = (selector: string, attribute: "content", value: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element) {
      element.setAttribute(attribute, value);
    }
  };

  setMeta('meta[name="description"]', "content", ui.meta.description);
  setMeta('meta[property="og:title"]', "content", ui.meta.title);
  setMeta('meta[property="og:description"]', "content", ui.meta.description);
}

export default function App() {
  useEffect(() => {
    syncMeta();
  }, []);

  return (
    <>
      <Nav />
      <SectionControls />
      <main className="site-shell">
        <Hero />
        <Skills />
        <About />
        <Craft />
        <Work />
        <Education />
        <Contact />
      </main>
    </>
  );
}

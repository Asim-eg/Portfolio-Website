import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { DeckStage } from "./components/DeckStage";
import { SectionControls } from "./components/SectionControls";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Craft } from "./sections/Craft";
import { Education } from "./sections/Education";
import { Hero } from "./sections/Hero";
import { Nav } from "./sections/Nav";
import { Skills } from "./sections/Skills";
import { Work } from "./sections/Work";
import { profile, ui } from "./lib/content";

type DeckSection = {
  element: ReactNode;
  href: string;
  label: string;
};

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
  const sections = useMemo<DeckSection[]>(
    () => [
      { element: <Hero />, href: "#top", label: "Home" },
      { element: <Skills />, href: "#skills", label: profile.sections.skills },
      { element: <About />, href: "#about", label: profile.sections.about },
      { element: <Craft />, href: "#craft", label: profile.sections.craft },
      { element: <Work />, href: "#work", label: profile.sections.work },
      { element: <Education />, href: "#education", label: profile.sections.education },
      { element: <Contact />, href: "#contact", label: profile.sections.contact },
    ],
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeIndexRef = useRef(activeIndex);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const wheelLockRef = useRef(0);

  useEffect(() => {
    syncMeta();
  }, []);

  useEffect(() => {
    const initialIndex = sections.findIndex((section) => section.href === window.location.hash);

    if (initialIndex > 0) {
      activeIndexRef.current = initialIndex;
      setActiveIndex(initialIndex);
    }
  }, [sections]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const navigateTo = useCallback(
    (nextIndex: number) => {
      const clamped = Math.max(0, Math.min(nextIndex, sections.length - 1));
      const current = activeIndexRef.current;

      if (clamped === current) {
        return;
      }

      setDirection(clamped > current ? 1 : -1);
      activeIndexRef.current = clamped;
      setActiveIndex(clamped);
      window.history.replaceState(null, "", sections[clamped].href);
    },
    [sections],
  );

  const navigateToHref = useCallback(
    (href: string) => {
      const index = sections.findIndex((section) => section.href === href);

      if (index >= 0) {
        navigateTo(index);
      }
    },
    [navigateTo, sections],
  );

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) {
        navigateToHref(window.location.hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [navigateToHref]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 34) {
        return;
      }

      const now = window.performance.now();

      if (now - wheelLockRef.current < 780) {
        return;
      }

      wheelLockRef.current = now;
      navigateTo(activeIndexRef.current + (event.deltaY > 0 ? 1 : -1));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        navigateTo(activeIndexRef.current + 1);
      }

      if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        navigateTo(activeIndexRef.current - 1);
      }

      if (event.key === "Home") {
        event.preventDefault();
        navigateTo(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        navigateTo(sections.length - 1);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      touchStartRef.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartRef.current;
      const touch = event.changedTouches[0];
      touchStartRef.current = null;

      if (!start || !touch) {
        return;
      }

      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;
      const primaryDelta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : -deltaY;

      if (Math.abs(primaryDelta) < 56) {
        return;
      }

      navigateTo(activeIndexRef.current + (primaryDelta < 0 ? 1 : -1));
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [navigateTo, sections.length]);

  const activeSection = sections[activeIndex];

  return (
    <div className="app-frame">
      <Nav activeHref={activeSection.href} onNavigate={navigateToHref} />
      <SectionControls activeIndex={activeIndex} onNavigate={navigateTo} sections={sections} />
      <main className="site-shell">
        <DeckStage activeKey={activeSection.href} direction={direction}>
          {activeSection.element}
        </DeckStage>
      </main>
    </div>
  );
}

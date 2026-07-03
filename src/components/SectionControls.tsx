import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { profile } from "../lib/content";

type SectionTarget = {
  href: string;
  label: string;
};

export function SectionControls() {
  const sections = useMemo<SectionTarget[]>(
    () => [{ href: "#top", label: "Hero" }, ...profile.nav.links],
    [],
  );
  const [active, setActive] = useState(sections[0]?.href ?? "#top");

  useEffect(() => {
    const elements = sections
      .map((section) => document.querySelector(section.href))
      .filter((element): element is Element => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: [0.36, 0.52, 0.72] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.href === active),
  );

  const currentIndex = () => {
    const anchor = window.scrollY + window.innerHeight * 0.32;
    return Math.max(
      0,
      sections.findIndex((section, index) => {
        const current = document.querySelector(section.href) as HTMLElement | null;
        const nextHref = sections[index + 1]?.href;
        const next = nextHref ? (document.querySelector(nextHref) as HTMLElement | null) : null;
        return current ? anchor >= current.offsetTop && (!next || anchor < next.offsetTop) : false;
      }),
    );
  };

  const scrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="section-controls" aria-label="Section controls">
      <button
        aria-label="Previous section"
        disabled={activeIndex === 0}
        onClick={() => scrollTo(sections[Math.max(currentIndex() - 1, 0)].href)}
        type="button"
      >
        <ChevronUp aria-hidden="true" size={17} />
      </button>

      <div className="section-dots">
        {sections.map((section) => (
          <button
            aria-current={active === section.href ? "true" : undefined}
            aria-label={section.label}
            key={section.href}
            onClick={() => scrollTo(section.href)}
            type="button"
          />
        ))}
      </div>

      <button
        aria-label="Next section"
        disabled={activeIndex === sections.length - 1}
        onClick={() => scrollTo(sections[Math.min(currentIndex() + 1, sections.length - 1)].href)}
        type="button"
      >
        <ChevronDown aria-hidden="true" size={17} />
      </button>
    </aside>
  );
}

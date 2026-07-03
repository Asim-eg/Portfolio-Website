import { ChevronLeft, ChevronRight } from "lucide-react";

type SectionTarget = {
  href: string;
  label: string;
};

type SectionControlsProps = {
  activeIndex: number;
  onNavigate: (index: number) => void;
  sections: SectionTarget[];
};

export function SectionControls({ activeIndex, onNavigate, sections }: SectionControlsProps) {
  return (
    <aside className="section-controls" aria-label="Section controls">
      <button
        aria-label="Previous card"
        disabled={activeIndex === 0}
        onClick={() => onNavigate(activeIndex - 1)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" size={17} />
      </button>

      <div className="section-dots">
        {sections.map((section, index) => (
          <button
            aria-current={activeIndex === index ? "true" : undefined}
            aria-label={section.label}
            key={section.href}
            onClick={() => onNavigate(index)}
            type="button"
          />
        ))}
      </div>

      <button
        aria-label="Next card"
        disabled={activeIndex === sections.length - 1}
        onClick={() => onNavigate(activeIndex + 1)}
        type="button"
      >
        <ChevronRight aria-hidden="true" size={17} />
      </button>
    </aside>
  );
}

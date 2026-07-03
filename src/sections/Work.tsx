import { useState } from "react";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { FadeIn, GhostButton } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile, type ExperienceEntry } from "../lib/content";

function WorkCard({ entry, index, isActive }: { entry: ExperienceEntry; index: number; isActive: boolean }) {
  return (
    <FadeIn
      aria-labelledby={`experience-tab-${index}`}
      className={`experience-card${isActive ? " is-active" : ""}`}
      delay={index * 0.08}
      id={`experience-panel-${index}`}
      role="tabpanel"
      y={28}
    >
      <div className="experience-head">
        <div>
          <h3>{entry.company}</h3>
          <p>{entry.role}</p>
        </div>
      </div>

      <div className="experience-meta">
        <span>
          <CalendarDays aria-hidden="true" size={15} />
          {entry.dates}
        </span>
        <span>
          <MapPin aria-hidden="true" size={15} />
          {entry.where}
        </span>
      </div>

      <ul className="experience-lines">
        {entry.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {entry.note ? <p className="experience-note">{entry.note}</p> : null}

      <GhostButton className="experience-link" href={profile.linkedin} rel="noreferrer" target="_blank">
        {profile.actions.details}
        <ExternalLink aria-hidden="true" size={15} />
      </GhostButton>
    </FadeIn>
  );
}

export function Work() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <Panel className="work-panel" direction="left" id="work">
      <div className="panel-heading">
        <h2>{profile.sections.work}</h2>
      </div>

      <div className="experience-tabs" role="tablist" aria-label="Experience companies">
        {profile.experience.map((entry, index) => (
          <button
            aria-controls={`experience-panel-${index}`}
            aria-selected={activeExperience === index}
            className="experience-tab"
            id={`experience-tab-${index}`}
            key={entry.company}
            onClick={() => setActiveExperience(index)}
            role="tab"
            type="button"
          >
            <strong>{entry.company}</strong>
            <span>{entry.role}</span>
          </button>
        ))}
      </div>

      <div className="experience-grid">
        {profile.experience.map((entry, index) => (
          <WorkCard entry={entry} index={index} isActive={activeExperience === index} key={entry.company} />
        ))}
      </div>
    </Panel>
  );
}

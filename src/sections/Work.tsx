import { useState } from "react";
import {
  CalendarDays,
  ExternalLink,
  MapPin,
  PhoneCall,
  RadioTower,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import { FadeIn, GhostButton } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile, type ExperienceEntry } from "../lib/content";

const companyIcons: Array<[string, LucideIcon]> = [
  ["SAFARIFONE", RadioTower],
  ["CONTACTVA", PhoneCall],
  ["ZIXEL", ServerCog],
];

function iconForCompany(company: string) {
  const normalized = company.toUpperCase().replace(/\s+/g, "");
  return companyIcons.find(([needle]) => normalized.includes(needle))?.[1] ?? ServerCog;
}

function WorkCard({ entry, index, isActive }: { entry: ExperienceEntry; index: number; isActive: boolean }) {
  const CompanyIcon = iconForCompany(entry.company);

  return (
    <FadeIn className={`experience-card${isActive ? " is-active" : ""}`} delay={index * 0.08} y={28}>
      <div className="experience-head">
        <span className="experience-company-icon">
          <CompanyIcon aria-hidden="true" size={24} />
        </span>
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

      {entry.impact ? (
        <aside className="experience-impact" aria-label={`${entry.company} impact summary`}>
          <span>{entry.impact.label}</span>
          <p>{entry.impact.text}</p>
          <div>
            {entry.impact.tags.map((tag) => (
              <strong key={tag}>{tag}</strong>
            ))}
          </div>
        </aside>
      ) : null}

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

      <div className="experience-tabs" aria-label="Experience companies">
        {profile.experience.map((entry, index) => (
          <button
            aria-pressed={activeExperience === index}
            className="experience-tab"
            key={entry.company}
            onClick={() => setActiveExperience(index)}
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

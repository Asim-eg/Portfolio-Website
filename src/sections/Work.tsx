import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { FadeIn, GhostButton } from "../components/Motion";
import { Panel } from "../components/Panel";
import { SystemStrip } from "../components/SystemStrip";
import { profile, type ExperienceEntry } from "../lib/content";

function WorkCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const nodes = index === 0 ? profile.systems[0]?.nodes ?? [] : [];

  return (
    <FadeIn className={`experience-card ${index === 0 ? "experience-card-featured" : ""}`} delay={index * 0.08} y={28}>
      <div className="experience-head">
        <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
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
      {nodes.length > 0 ? <SystemStrip nodes={nodes} /> : null}

      <GhostButton className="experience-link" href={profile.linkedin} rel="noreferrer" target="_blank">
        {profile.actions.details}
        <ExternalLink aria-hidden="true" size={15} />
      </GhostButton>
    </FadeIn>
  );
}

export function Work() {
  return (
    <Panel className="work-panel" direction="left" id="work">
      <div className="panel-heading">
        <span>05</span>
        <h2>{profile.sections.work}</h2>
      </div>

      <div className="experience-grid">
        {profile.experience.map((entry, index) => (
          <WorkCard entry={entry} index={index} key={entry.company} />
        ))}
      </div>
    </Panel>
  );
}

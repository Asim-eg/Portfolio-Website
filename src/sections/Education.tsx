import { ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { FadeIn } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile } from "../lib/content";

export function Education() {
  return (
    <Panel className="education-panel" direction="right" id="education">
      <div className="panel-heading">
        <span>06</span>
        <h2>{profile.sections.education}</h2>
      </div>

      <FadeIn className="education-card" delay={0.12}>
        <span className="education-icon">
          <GraduationCap aria-hidden="true" size={34} />
        </span>
        <div>
          <p className="education-years">{profile.education.years}</p>
          <h3>{profile.education.degree}</h3>
          <p className="education-school">{profile.education.school}</p>
          <p className="education-blurb">{profile.education.blurb}</p>
          <a className="campus-link" href={profile.education.campusUrl} rel="noreferrer" target="_blank">
            <MapPin aria-hidden="true" size={17} />
            {profile.education.campusLabel}
            <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>
      </FadeIn>
    </Panel>
  );
}

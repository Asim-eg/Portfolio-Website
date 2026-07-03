import { Bug, RadioTower, Router, ServerCog, SmartphoneNfc, type LucideIcon } from "lucide-react";
import { FadeIn } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile } from "../lib/content";

const icons: LucideIcon[] = [SmartphoneNfc, ServerCog, Router, RadioTower, Bug];

export function Craft() {
  return (
    <Panel className="craft-panel" direction="right" id="craft">
      <div className="panel-heading">
        <span>04</span>
        <h2>{profile.sections.craft}</h2>
      </div>

      <div className="craft-grid">
        {profile.craft.map((entry, index) => {
          const Icon = icons[index] ?? ServerCog;

          return (
            <FadeIn className="craft-card" delay={index * 0.06} key={entry.title} x={index % 2 === 0 ? -28 : 28} y={0}>
              <div className="craft-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="craft-body">
                <span className="craft-icon">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3>{entry.title}</h3>
                <p>{entry.desc}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Panel>
  );
}

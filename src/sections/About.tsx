import { MapPin, Mountain, Network, Plane, ShieldCheck, TerminalSquare, type LucideIcon } from "lucide-react";
import { FadeIn, GradientButton } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile, type Hobby } from "../lib/content";

const icons: Record<Hobby["icon"], LucideIcon> = {
  Mountain,
  Network,
  Plane,
  ShieldCheck,
};

const facts = [
  "5G core and subscriber platforms",
  "eSIM lifecycle against live SM-DP+",
  "SS7/MAP and USSD adapters",
  "Go and C close to production traffic",
];

export function About() {
  return (
    <Panel className="about-panel" direction="left" id="about">
      <div className="panel-heading">
        <span>03</span>
        <h2>{profile.sections.about}</h2>
      </div>

      <div className="about-grid">
        <FadeIn className="about-story" x={-30} y={0}>
          <TerminalSquare aria-hidden="true" size={34} />
          <p>{profile.howIWork}</p>
          <GradientButton href="#contact">{profile.actions.contact}</GradientButton>
        </FadeIn>

        <div className="about-facts">
          <FadeIn className="location-card" delay={0.1} x={30} y={0}>
            <MapPin aria-hidden="true" size={22} />
            <div>
              <strong>{profile.location}</strong>
              <span>{profile.availability}</span>
            </div>
          </FadeIn>

          <div className="fact-grid">
            {facts.map((fact, index) => (
              <FadeIn className="fact-card" delay={index * 0.07} key={fact} x={30} y={0}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{fact}</p>
              </FadeIn>
            ))}
          </div>

          <div className="hobby-grid">
            {profile.hobbies.map((hobby, index) => {
              const Icon = icons[hobby.icon];

              return (
                <FadeIn className="hobby-card" delay={0.1 + index * 0.06} key={hobby.name} x={30} y={0}>
                  <Icon aria-hidden="true" size={20} />
                  <div>
                    <strong>{hobby.name}</strong>
                    <span>{hobby.line}</span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </Panel>
  );
}

import {
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  MapPin,
  Mountain,
  Plane,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { FadeIn, GradientButton } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile, type Hobby } from "../lib/content";

const icons: Record<Hobby["icon"], LucideIcon> = {
  Mountain,
  Network: BrainCircuit,
  Plane,
  ShieldCheck,
};

const facts = [
  "5G core, eSIM, SS7/MAP, USSD, and subscriber data systems.",
  "Go and C services built close to production traffic, not demo flows.",
  "Comfortable with failure modes: callbacks, state machines, tail latency, traces.",
  "Strongest where backend correctness and telecom domain detail meet.",
];

export function About() {
  return (
    <Panel className="about-panel" direction="left" id="about">
      <div className="panel-heading">
        <h2>{profile.sections.about}</h2>
      </div>

      <div className="about-grid">
        <FadeIn className="about-card about-card-work" x={-34} y={0}>
          <div className="about-card-top">
            <span className="about-icon">
              <BriefcaseBusiness aria-hidden="true" size={26} />
            </span>
            <div>
              <span className="about-card-label">Professional</span>
              <h3>Backend systems that have to stay correct in production.</h3>
            </div>
          </div>

          <p>{profile.howIWork}</p>

          <ul className="about-proof-list">
            {facts.map((fact) => (
              <li key={fact}>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>{fact}</span>
              </li>
            ))}
          </ul>

          <GradientButton href="#contact">{profile.actions.contact}</GradientButton>
        </FadeIn>

        <FadeIn className="about-card about-card-personal" delay={0.08} x={34} y={0}>
          <div className="about-card-top">
            <span className="about-icon">
              <UserRound aria-hidden="true" size={26} />
            </span>
            <div>
              <span className="about-card-label">Personal</span>
              <h3>Calm under pressure, direct in communication, practical by default.</h3>
            </div>
          </div>

          <div className="location-card">
            <MapPin aria-hidden="true" size={22} />
            <div>
              <strong>{profile.location}</strong>
              <span>{profile.availability}</span>
            </div>
          </div>

          <p className="about-personal-copy">
            Outside production systems, I keep a low-noise routine: trails, travel, and clear
            notes after messy incidents.
          </p>

          <div className="personal-rows">
            {profile.hobbies.map((hobby) => {
              const Icon = icons[hobby.icon];

              return (
                <div className="hobby-card" key={hobby.name}>
                  <span className="hobby-icon">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <div>
                    <strong>{hobby.name}</strong>
                    <span>{hobby.line}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="personal-signal">
            <Compass aria-hidden="true" size={18} />
            <span>Deliberate, practical, and calm when systems are noisy.</span>
          </div>
        </FadeIn>
      </div>
    </Panel>
  );
}
